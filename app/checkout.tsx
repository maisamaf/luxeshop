import { useCallback, useEffect, useRef } from "react";
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

import CustomIcon from "@/components/icon";
import { PRIMARY } from "@/utils/colors";

export default function Checkout() {
  const router = useRouter();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  return (
    <BottomSheetModalProvider>
      <SafeAreaView className="relative h-full">
        <ScrollView className="relative h-full p-4 bg-white">
          <View className="relative flex-row w-full ">
            <Pressable
              onPress={() => router.back()}
              className="p-1.5 border rounded-full border-grey/40"
            >
              <CustomIcon name="ArrowLeft" size={16} color="#000" />
            </Pressable>
            <View className="mx-auto">
              <Text className="-ml-12 text-lg text-center text-black font-sfsemibold">
                Checkout
              </Text>
            </View>
          </View>
          <View className="gap-6 mt-6 ">
            {/* shipping address card */}
            <View className="p-6 border border-gray-300 rounded-lg">
              <View className="flex-row w-full gap-4">
                <View>
                  <CustomIcon name="MapPinned" color={PRIMARY} size={20} />
                </View>
                <View className="flex-1">
                  <Text className="text-sm font-sfsemibold">
                    Shipping Address
                  </Text>
                  <View className="flex-row items-start w-full mt-2">
                    <View className="px-2 py-1 rounded-full bg-primary/10">
                      <Text className="text-[9px] text-primary">Home</Text>
                    </View>
                    <View>
                      <Text className="ml-1 mr-8 text-xs leading-relaxed ">
                        5678 Maple Avenue, Suite 12A, Westwood Heights,
                        Maplewood District, Los Angeles City, Los Angeles
                        County, CA 90001 United States
                      </Text>
                      <View className="flex-row items-center gap-2 mt-2">
                        <Text className="text-xs">Albert Flores</Text>
                        <CustomIcon name="Dot" size={20} />
                        <Text className="text-xs text-grey">
                          +62 874 3190 1715
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View className="items-center justify-center w-fit">
                  <CustomIcon name="ChevronRight" size={17} />
                </View>
              </View>
            </View>
            {/* product/s */}
            <View className="flex-row gap-6">
              <Image
                source={require("@/assets/images/ipad.png")}
                className="object-cover h-20 w-14"
              />

              <View className="justify-between flex-1">
                <View className="gap-1">
                  <Text className="text-sm">
                    Ipad Pro 6th Generation 11 inch 2022
                  </Text>
                  <Text className="text-sm text-grey">
                    Space Gray colors,Wi-fi only, 256 GB
                  </Text>
                </View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-base font-semibold ">
                    AFN 15.288.000
                  </Text>
                  <View className="mr-2">
                    <Text className="ml-auto text-xs text-black">x1</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Shipping options */}
            <View className="gap-4">
              <View className="flex-row items-center justify-between">
                <Text className="font-sfsemibold">Select Shipping</Text>
                <Pressable onPress={() => {}}>
                  <Text className="text-sm text-primary">See all options</Text>
                </Pressable>
              </View>

              <View className="p-4 border border-gray-300 rounded-lg">
                <View className="flex-row items-center justify-between">
                  <View className="gap-2">
                    <Text className="text-sm">Express</Text>
                    <Text className="text-xs text-grey">
                      Estimated arrival 9 - 10 June
                    </Text>
                  </View>
                  <Text>AFN 50.000</Text>
                </View>
              </View>

              <View className="flex-row items-center justify-between gap-2">
                <Text className="text-sm">Note:</Text>
                <TextInput
                  placeholder="Type any message..."
                  className="placeholder:text-sm"
                  multiline
                />
              </View>

              <View className="flex-row items-center justify-between gap-2">
                <Text className="text-sm">Subtotal, 1 items:</Text>
                <Text className="text-lg font-sfregular text-primary">
                  AFN 15.349.000
                </Text>
              </View>

              <View className="m-3 h-[1px] bg-gray-300" />
            </View>

            {/* Payment methods */}
            <View className="gap-4">
              <Text className="font-sfsemibold">Payment Method</Text>
              <ScrollView
                horizontal
                contentContainerClassName="gap-4"
                showsHorizontalScrollIndicator={false}
              >
                {/* Cash */}
                <View className="gap-1 px-4 py-2 border rounded-lg border-primary bg-primary/5 max-w-60">
                  <View className="flex-row items-center gap-2">
                    <CustomIcon
                      name="Banknote"
                      color={PRIMARY}
                      strokeWidth={1}
                    />
                    <Text className="text-sm font-sfsemibold text-primary">
                      Cash
                    </Text>
                  </View>
                  <Text className="text-xs leading-relaxed text-primary font-sfregular">
                    Pay cash when the medicine arrives at the desination.
                  </Text>
                </View>

                {/* Bank transfer */}
                <View className="gap-1 px-4 py-2 border border-gray-300 rounded-lg max-w-60">
                  <View className="flex-row items-center gap-2">
                    <CustomIcon name="Landmark" color={PRIMARY} size={17} />
                    <Text className="text-sm font-sfsemibold">
                      Bank Transfer
                    </Text>
                  </View>
                  <Text className="text-xs leading-relaxed text-grey font-sfregular">
                    Log in to your online account and make the payment.
                  </Text>
                </View>

                {/* Bank transfer */}
                <View className="gap-1 px-4 py-2 border border-gray-300 rounded-lg max-w-60">
                  <View className="flex-row items-center gap-2">
                    <CustomIcon name="Bitcoin" color={PRIMARY} size={17} />
                    <Text className="text-sm font-sfsemibold">Bitcoin</Text>
                  </View>
                  <Text className="text-xs leading-relaxed text-grey font-sfregular">
                    Log in to your online account and make the payment.
                  </Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
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
            <View className="flex-row items-center justify-between gap-8 p-4">
              <View className="gap-1">
                <Text className="text-sm text-gray-600">Total</Text>
                <Text className="font-sfsemibold">IDR 15.349.000</Text>
              </View>
              <View className="">
                <TouchableOpacity className="px-8 py-4 rounded-lg bg-primary/90">
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
