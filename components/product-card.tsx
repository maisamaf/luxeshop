import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from "react-native";

import { useRouter } from "expo-router";

import CustomIcon from "./icon";

type PropTypes = {
  image: ImageSourcePropType | string;
  title: string;
  url: string;
  price: number;
  rating: number;
  soldItems?: number;
  location?: string;
  discount?: number;
};

const ProductCard = ({
  image,
  title,
  price,
  rating,
  soldItems,
  location,
  discount,
  url,
}: PropTypes) => {
  const router = useRouter();

  // Calculate discount amount
  let discountAmount = price * (discount / 100);

  let discountedPrice = (price - discountAmount).toFixed();
  return (
    <Pressable
      onPress={() => router.push(url)}
      className="p-2 m-2 overflow-hidden bg-white border rounded-xl realtive border-grey/40"
    >
      <View className="items-center justify-center mt-2">
        <Image
          source={typeof image == "string" ? { uri: image } : image}
          className="size-32"
        />
      </View>
      <View className="mt-2">
        <Text className="text-sm">{title}</Text>
        {discount ? (
          <View className="mt-2">
            <Text className="font-semibold">AFN {discountedPrice}</Text>
            <Text className="mt-1 text-xs text-gray-500 line-through">
              AFN {price}
            </Text>
          </View>
        ) : (
          <Text className="mt-2 font-semibold">AFN {price}</Text>
        )}
        <View className="flex flex-row items-center gap-1">
          <CustomIcon name="Star" size={16} color="#ffa534" fill="#ffa534" />
          <Text className="text-xs">{rating}</Text>
          <CustomIcon name="Dot" size={24} style={{ marginLeft: -8 }} />
          <Text className="-ml-2 text-xs">{soldItems} sold</Text>
        </View>
        <View className="flex flex-row items-center gap-1">
          <CustomIcon
            name="MapPin"
            size={18}
            color="#FFFFFF"
            fill="#f44546"
            style={{ marginLeft: -2 }}
          />
          <Text className="text-xs">{location}</Text>
        </View>
      </View>
      {discount && (
        <View className="absolute px-3 py-1 rounded-full top-3 right-3 bg-primary/10">
          <Text className="text-xs font-medium text-primary">
            {discount}% off
          </Text>
        </View>
      )}
    </Pressable>
  );
};

export default ProductCard;
