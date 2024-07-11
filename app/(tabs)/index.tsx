import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomIcon from "@/components/icon";
import { StatusBar } from "expo-status-bar";
import Search from "@/components/search";
import Category from "@/components/category";
import PromoCard from "@/components/promo-card";
import ProductCard from "@/components/product-card";
import { MasonryFlashList } from "@shopify/flash-list";

const categoriesList = [
  {
    id: "electronic",
    title: "Electronic",
    image: require("@/assets/images/electronics.png"),
  },
  {
    id: "food-drink",
    title: "Food & Drink",
    image: require("@/assets/images/fast-food.png"),
  },
  {
    id: "accessories",
    title: "Accessories",
    image: require("@/assets/images/watch.png"),
  },
  {
    id: "beauty",
    title: "Beauty",
    image: require("@/assets/images/makeup-pouch.png"),
  },
  {
    id: "furniture",
    title: "Furniture",
    image: require("@/assets/images/sofa.png"),
  },
  {
    id: "fashion",
    title: "Fashion",
    image: require("@/assets/images/consumption.png"),
  },
  {
    id: "health",
    title: "Health",
    image: require("@/assets/images/healthcare.png"),
  },
  {
    id: "stationery",
    title: "Stationery",
    image: require("@/assets/images/stationery.png"),
  },
];

const productList = [
  {
    id: "product-1",
    image: "https://img.freepik.com/free-photo/blue-t-shirt_125540-727.jpg",
    title: "Uniqlo Basic T-shirt Oversized White",
    price: 1200,
    rating: 4.9,
    url: "",
    soldItems: 564,
    location: "Sydney",
  },
  {
    id: "product-2",
    image: require("@/assets/images/shoe.png"),
    title: "New Balance 550 Men's Sneakers Shoes - Beige",
    price: 430,
    rating: 4.9,
    url: "",
    soldItems: 246,
    discount: 12,
    location: "Sydney",
  },
  {
    id: "product-3",
    image: require("@/assets/images/white-tshirt.png"),
    title: "New Balance 550 Men's Sneakers Shoes - Beige",
    price: 500,
    rating: 4.9,
    url: "",
    soldItems: 21,
    discount: 10,
    location: "Sydney",
  },
  {
    id: "product-4",
    image: require("@/assets/images/white-tshirt.png"),
    title: "Uniqlo Basic T-shirt Oversized White",
    price: 200,
    rating: 4.9,
    url: "",
    soldItems: 212,
    discount: 25,
    location: "Sydney",
  },
  {
    id: "product-6",
    image: require("@/assets/images/white-tshirt.png"),
    title: "Uniqlo Basic T-shirt Oversized White",
    price: 1200,
    rating: 4.9,
    url: "",
    soldItems: 897,
    location: "Sydney",
  },
  {
    id: "product-7",
    image: require("@/assets/images/white-tshirt.png"),
    title: "Uniqlo Basic T-shirt Oversized White",
    price: 1200,
    rating: 4.9,
    url: "",
    soldItems: 344,
    location: "Sydney",
  },
  {
    id: "product-8",
    image: require("@/assets/images/white-tshirt.png"),
    title: "Uniqlo Basic T-shirt Oversized White",
    price: 1200,
    rating: 4.9,
    url: "",
    soldItems: 344,
    location: "Sydney",
  },
  {
    id: "product-9",
    image: require("@/assets/images/white-tshirt.png"),
    title: "Uniqlo Basic T-shirt Oversized White",
    price: 1200,
    rating: 4.9,
    url: "",
    soldItems: 344,
    location: "Sydney",
  },
];
export default function Home() {
  return (
    <SafeAreaView>
      <FlatList
        className="h-full bg-white/90"
        ListHeaderComponent={() => (
          <>
            <View className="flex-row justify-between gap-4 mb-4">
              <View className="flex-row items-center gap-2 ml-4">
                <CustomIcon name="Chrome" color="#FA5A2A" size={32} />
                <Text className="font-semibold">Luxeshop</Text>
              </View>

              <View className="mx-4 flex-row gap-x-2.5">
                <TouchableOpacity className="border-grey/40 items-center justify-center rounded-md border p-1.5">
                  <CustomIcon name="ShoppingBag" size={16} />
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
          <>
            <PromoCard />
            <MasonryFlashList
              data={productList}
              numColumns={2}
              renderItem={({ item, index }) => <ProductCard {...item} />}
              estimatedItemSize={200}
              contentContainerStyle={{
                padding: 8,
              }}
              keyExtractor={(item) => item.id}
            />
            {/* <FlatList
              numColumns={productList.length / 2}
              data={productList}
              renderItem={({ item, index }) => (
                <View className="flex-col flex-1">
                  <ProductCard {...item} />
                </View>
              )}
              keyExtractor={(item) => item.id}
              columnWrapperClassName="mt-4 gap-4 mx-4"
            /> */}
          </>
        )}
        ListFooterComponentClassName="mb-16"
      />

      <StatusBar hidden />
    </SafeAreaView>
  );
}
