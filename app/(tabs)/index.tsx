import {
  FlatList,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomIcon from "@/components/icon";
import { StatusBar } from "expo-status-bar";
import Search from "@/components/search";
import Category from "@/components/category";

import ProductCard from "@/components/product-card";
import { MasonryFlashList } from "@shopify/flash-list";
import { useRouter } from "expo-router";

// color
import { PRIMARY } from "@/utils/colors";

// data
import { categoriesList } from "@/utils/data";
import { productList } from "@/utils/data";

import Toast from "react-native-toast-message";

// redux state
import { useSelector } from "react-redux";
import { RootState } from "@/store/configureStore";
import PromoCard from "@/components/promo-card";

export default function Home() {
  const router = useRouter();
  const cart = useSelector((state: RootState) => state.cart);

  const cartOnClick = () => {
    if (cart.length > 0) {
      router.push("/cart");
    } else {
      Toast.show({
        type: "info",
        text1: "Cart is empty!",
      });
    }
  };

  return (
    <SafeAreaView>
      <FlatList
        className="h-full bg-white/90"
        ListHeaderComponent={() => (
          <>
            <View className="flex-row justify-between gap-4 mb-4">
              <View className="flex-row items-center gap-2 ml-4">
                <CustomIcon name="Chrome" color={PRIMARY} size={32} />
                <Text className="font-semibold">Luxeshop</Text>
              </View>

              <View className="mx-4 flex-row gap-x-2.5">
                <TouchableOpacity
                  onPress={cartOnClick}
                  className="border-grey/40 items-center justify-center rounded-md border p-1.5"
                >
                  <View className="relative">
                    <CustomIcon name="ShoppingBag" size={16} />
                    {cart.length > 0 && (
                      <View className="absolute top-0 right-0 bg-red-500 rounded-full size-1.5" />
                    )}
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="border-grey/40 items-center justify-center rounded-md border p-1.5">
                  <CustomIcon name="Bell" size={16} />
                </TouchableOpacity>
              </View>
            </View>
            <View className="mx-4">
              <Search />
            </View>
          </>
        )}
        numColumns={4}
        data={categoriesList}
        renderItem={({ item, index }) => (
          <View className="items-center justify-center flex-1">
            <Category title={item.title} link="" image={item.image} />
          </View>
        )}
        contentContainerClassName="my-6 gap-6"
        keyExtractor={(item) => item.id}
        ListFooterComponent={() => (
          <View className="h-full mx-4">
            <PromoCard />
            <View className="flex-row justify-between mt-6 mb-2">
              <Text className="text-xl font-sfbold">Recent Additions</Text>
            </View>
            <MasonryFlashList
              data={productList}
              numColumns={2}
              renderItem={({ item, index }) => (
                <View className={`mb-2 ${index % 2 === 0 ? "mr-2" : ""}`}>
                  <ProductCard {...{ ...item, id: String(item.id) }} />
                </View>
              )}
              estimatedItemSize={200}
              keyExtractor={(item) => item.id as string}
              contentContainerClassName="-ml-4"
            />
          </View>
        )}
        ListFooterComponentClassName="mb-16"
      />

      <StatusBar hidden />
    </SafeAreaView>
  );
}
