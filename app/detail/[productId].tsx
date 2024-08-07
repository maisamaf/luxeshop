import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";

import { useRouter, usePathname } from "expo-router";

import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { PRIMARY } from "@/utils/colors";
import { useWindowDimensions } from "react-native";
import { useSharedValue } from "react-native-reanimated";

import CustomIcon from "@/components/icon";

// redux
import type { RootState } from "@/store/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "@/reducers/cartReducer";

// data
import { DataFormat } from "@/utils/data";
import { productList } from "@/utils/data";
import { PriceAfterDiscount } from "@/utils/getDiscountedPrice";

const defaultProduct: DataFormat = {
  slug: "",
  id: "",
  images: [],
  title: "",
  description: "",
  price: 0,
  rating: 0,
  soldItems: 0,
  discount: undefined,
  location: "",
  color: "",
};

export default function SingleProduct() {
  const pathname = usePathname();
  const product = productList.find(
    (item) => item.slug === pathname.split("/")[2]
  );

  const [isFavorite, setIsFavorite] = useState(false);

  const [item, setItem] = React.useState<DataFormat>({
    ...defaultProduct,
    ...product,
    id: Array.isArray(product?.id) ? product?.id.join("") : product?.id,
  });

  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const { width } = useWindowDimensions();
  const router = useRouter();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  if (!product) console.log("not found");

  const handleAddToCart = () => {
    dispatch(addToCart({ ...item }));
  };

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
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
        <ScrollView className="relative h-full p-4 bg-white ">
          <View className="relative flex-row justify-between w-full">
            <Pressable
              onPress={() => router.back()}
              className="p-1.5 border rounded-full border-grey/40"
            >
              <CustomIcon name="ArrowLeft" size={16} color="#000" />
            </Pressable>
            <View className="mx-auto">
              <Text className="text-lg text-center text-black font-sfsemibold">
                Product Detail
              </Text>
            </View>
            <Pressable
              onPress={() => {}}
              className="p-1.5 border rounded-full border-grey/40"
            >
              <CustomIcon name="Share2" size={16} color="#000" />
            </Pressable>
          </View>
          <View className="mb-8">
            <Carousel
              ref={ref}
              loop
              width={width - 40}
              height={320}
              autoPlay={item.images.length > 1 ? true : false}
              data={item.images}
              onProgressChange={progress}
              scrollAnimationDuration={1000}
              // onSnapToItem={(index) => console.log("current index:", index)}
              renderItem={({ item, index }) => (
                <View className="h-full">
                  <Image
                    source={item}
                    resizeMethod="scale"
                    resizeMode="contain"
                    className="w-full my-12 rounded-lg h-72"
                  />
                </View>
              )}
            />
            {item.images.length > 1 && (
              <Pagination.Basic
                progress={progress}
                data={item.images}
                dotStyle={{
                  backgroundColor: "rgba(0,0,0,0.2)",
                  borderRadius: 50,
                  width: 40,
                  height: 5,
                }}
                activeDotStyle={{ backgroundColor: PRIMARY }}
                containerStyle={{ gap: 5, marginTop: 10 }}
                onPress={onPressPagination}
              />
            )}
          </View>

          <View className="flex-row justify-between w-full h-full mb-44">
            <View className="flex-1">
              <Text className="text-lg leading-relaxed font-sfregular">
                {item?.title}
              </Text>
              <View className="flex-row items-baseline justify-start gap-2 mt-2">
                {item.discount && (
                  <View>
                    <Text className="text-lg font-sfsemibold">
                      AFN {PriceAfterDiscount(item.price, item.discount)}
                    </Text>

                    <Text className="mt-2 text-gray-500 line-through">
                      AFN {item.price}
                    </Text>
                  </View>
                )}
                {!item.discount && (
                  <Text className="text-lg font-sfsemibold">
                    AFN {item.price}
                  </Text>
                )}

                {item.discount && (
                  <View className="px-3 py-1 rounded-full bg-primary/10">
                    <Text className="text-xs font-sfsemibold text-primary">
                      {item.discount}% off
                    </Text>
                  </View>
                )}
              </View>

              <Text className="mt-6 font-sfsemibold">Product Description</Text>
              <Text className="mt-2 leading-snug text-gray-600 font-sfregular">
                {item.description}
              </Text>

              <Text className="mt-6 font-semibold">Type</Text>
              <View className="flex-row gap-4">
                <View className="flex-1 gap-3 mt-4">
                  <View className="flex-row gap-1">
                    <Text className="text-gray-400 font-sfregular">Color</Text>
                    <Text className="font-sfsemibold">Space Gray</Text>
                  </View>
                  <View className="flex-row gap-2">
                    <Pressable
                      onPress={() => {}}
                      className="p-0.5 rounded-full border border-orange-500"
                    >
                      <View className="rounded-full bg-black/40 size-8" />
                    </Pressable>
                    <Pressable
                      onPress={() => {}}
                      className="p-0.5 rounded-full border border-gray-200"
                    >
                      <View className="bg-gray-300 rounded-full size-8" />
                    </Pressable>
                  </View>
                </View>
                <View className="flex-1 gap-3 mt-4">
                  <View className="flex-row gap-1">
                    <Text className="text-gray-400 font-sfregular">Size:</Text>
                    <Text className="font-sfsemibold">S</Text>
                  </View>
                  <View className="flex-row gap-2">
                    <Pressable
                      onPress={() => {}}
                      className="items-center justify-center p-2 border rounded-full aspect-square border-primary bg-primary/5"
                    >
                      <Text className="text-sm text-primary">S</Text>
                    </Pressable>
                    <Pressable
                      onPress={() => {}}
                      className="items-center justify-center p-2 border border-gray-300 rounded-full aspect-square"
                    >
                      <Text className="text-sm">M</Text>
                    </Pressable>
                    <Pressable
                      onPress={() => {}}
                      className="items-center justify-center p-2 border border-gray-300 rounded-full aspect-square"
                    >
                      <Text className="text-sm">L</Text>
                    </Pressable>
                    <Pressable
                      onPress={() => {}}
                      className="items-center justify-center p-2 border border-gray-300 rounded-full aspect-square"
                    >
                      <Text className="text-sm">XL</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
            <Pressable onPress={() => setIsFavorite(!isFavorite)}>
              {isFavorite ? (
                <CustomIcon
                  name="Heart"
                  size={20}
                  color={PRIMARY}
                  fill={PRIMARY}
                />
              ) : (
                <CustomIcon name="Heart" size={20} />
              )}
            </Pressable>
          </View>

          <BottomSheetModal
            ref={bottomSheetModalRef}
            snapPoints={["10%"]}
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
            <BottomSheetView className="-mt-4">
              <View className="flex-row items-center justify-center w-full h-full gap-4 p-4">
                <TouchableOpacity
                  onPress={handleAddToCart}
                  className="flex-row items-center justify-center flex-1 gap-2 py-4 border rounded-lg border-primary"
                >
                  <CustomIcon name="ShoppingBag" size={17} color={PRIMARY} />
                  <Text className="pb-1 font-sfsemibold text-primary">
                    Add to Cart
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => router.push("/checkout")}
                  className="items-center justify-center flex-1 py-4 rounded-lg bg-primary/90"
                >
                  <Text className="pb-1 text-white font-sfsemibold">
                    Checkout
                  </Text>
                </TouchableOpacity>
              </View>
            </BottomSheetView>
          </BottomSheetModal>
        </ScrollView>
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
}
