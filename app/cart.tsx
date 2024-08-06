import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Platform,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import CartItem from "@/components/cart-item";
import CustomIcon from "@/components/icon";
import { useRouter } from "expo-router";
import Checkbox from "expo-checkbox";

import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { useCallback, useEffect, useRef } from "react";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { PRIMARY } from "@/utils/colors";

// redux
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "@/reducers/cartReducer";

export default function Cart() {
  const router = useRouter();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart);

  // Calculate the sum of all prices
  const subTotal = cartItems.reduce((total: number, product: any) => {
    // @ts-ignore comment
    return total + product.price * product.quantity;
  }, 0);

  const discounts = cartItems.reduce((total: number, product: any) => {
    // Ensure the discount is valid and exists
    return (
      total +
      (product.discount > 0
        ? (product.price * product.discount * product.quantity) / 100
        : 0)
    );
  }, 0);

  const total = (subTotal - discounts).toFixed(2);

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <BottomSheetModalProvider>
      <SafeAreaView className="relative">
        <View className="relative h-full bg-white">
          <View className="relative flex-row w-full m-4">
            <Pressable
              onPress={() => router.back()}
              className="p-1.5 border rounded-full border-grey/40"
            >
              <CustomIcon name="ArrowLeft" size={16} color="#000" />
            </Pressable>
            <View className="mx-auto">
              <Text className="-ml-12 text-lg text-center text-black font-sfsemibold">
                My Cart
              </Text>
            </View>
          </View>
          <FlatList
            className="gap-4 mx-4"
            data={cartItems}
            renderItem={({ item }) => (
              <CartItem {...item} image={item.images[0]} />
            )}
            keyExtractor={(item) => item.id}
            contentContainerClassName="pb-36"
          />
        </View>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          snapPoints={["12%"]}
          onChange={handleSheetChanges}
          enablePanDownToClose={false}
          enableOverDrag={false}
          handleIndicatorStyle={{ height: 0 }}
          style={{
            borderWidth: 0,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 10,
          }}
        >
          <BottomSheetView>
            <View className="flex-row items-center justify-center w-full h-full gap-8 p-4">
              <View className="flex-row items-center gap-2">
                <Checkbox
                  className="mt-1"
                  color={PRIMARY}
                  style={{ height: 16, width: 16 }}
                />
                <Text>Select all</Text>
              </View>
              <View className="gap-1">
                <Text className="text-sm text-gray-600">Total</Text>
                <Text className="font-sfsemibold">AFN {total}</Text>
              </View>
              <View className="">
                <TouchableOpacity className="px-8 py-4 bg-orange-600 rounded-lg">
                  <Text className="text-white">Checkout</Text>
                </TouchableOpacity>
              </View>
            </View>
          </BottomSheetView>
        </BottomSheetModal>
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
}
