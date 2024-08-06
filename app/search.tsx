import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MasonryFlashList } from "@shopify/flash-list";
import { useRouter } from "expo-router";

import { productList } from "@/utils/data";

import Search from "@/components/search";
import CustomIcon from "@/components/icon";
import ProductCard from "@/components/product-card";

export default function search() {
  const router = useRouter();
  return (
    <SafeAreaView className="relative h-full">
      <FlatList
        className="h-full p-4 bg-white"
        ListHeaderComponent={() => (
          <>
            <View className="relative flex-row items-center gap-4 w-max ">
              <Pressable
                onPress={() => router.back()}
                className="p-1.5 border rounded-full border-grey/40"
              >
                <CustomIcon name="ArrowLeft" size={16} color="#000" />
              </Pressable>
              <View className="flex-1">
                <Search />
              </View>
            </View>
            <Text className="mt-6 font-sfsemibold">Popular Search</Text>
          </>
        )}
        numColumns={2}
        data={[
          require("@/assets/images/iphone-14.jpg"),
          require("@/assets/images/apple-watch.png"),
          require("@/assets/images/sofa.png"),
          require("@/assets/images/shoe.png"),
        ]}
        renderItem={({ item, index }) => (
          <View className="flex-1 p-3 border border-gray-300 rounded-lg">
            <View className="flex-row items-center w-full gap-2">
              <Image source={item} className="w-12 h-12" resizeMode="contain" />
              <Text className="font-sfregular">Fossil Watch</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item}
        contentContainerClassName="gap-4"
        columnWrapperClassName="gap-4"
        ListFooterComponent={() => (
          <View className="h-full mt-4">
            <Text className="mb-6 text-lg font-sfsemibold">
              Recommended for You
            </Text>

            {/* <PromoCard /> */}
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
            />
          </View>
        )}
        ListFooterComponentClassName="mb-16"
      />
    </SafeAreaView>
  );
}
