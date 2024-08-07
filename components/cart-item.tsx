import { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import Checkbox from "expo-checkbox";

import CustomIcon from "./icon";
import { PRIMARY } from "@/utils/colors";
import { PriceAfterDiscount } from "@/utils/getDiscountedPrice";

type PropTypes = {
  image: ImageSourcePropType;
  title: string;
  price: number;
  discount?: number;
  isFavorite?: boolean;
};
const CartItem = ({ image, title, price, discount, isFavorite }: PropTypes) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <View className="w-full p-3 bg-white border rounded-lg border-grey/40">
      <View className="relative flex-row">
        <Checkbox
          className="mt-1"
          value={isChecked}
          onValueChange={setChecked}
          color={PRIMARY}
          style={{ height: 18, width: 18 }}
        />

        <View className="">
          <Image
            source={image}
            style={{ height: 100, width: 80 }}
            resizeMode="center"
          />
        </View>
        <View className="flex-1 gap-2 mt-2 ml-4">
          <Text className="text-xs text-gray-600">{title}</Text>
          {discount && (
            <>
              <View className="flex-row items-start gap-2">
                <Text className="text-black font-sfsemibold">
                  AFN {PriceAfterDiscount(price, discount)}
                </Text>

                <View className="px-3 py-1 rounded-full bg-primary/10">
                  <Text className="text-xs font-sfsemibold text-primary">
                    {discount}% off
                  </Text>
                </View>
              </View>
              <Text className="-mt-1 text-sm text-gray-500 line-through font-sfregular">
                AFN {price}
              </Text>
            </>
          )}
          {!discount && (
            <Text className="text-black font-sfsemibold">AFN {price}</Text>
          )}
          <View className="flex-row items-center justify-between mt-auto">
            <TouchableOpacity onPress={() => {}}>
              <CustomIcon name="Heart" size={20} />
            </TouchableOpacity>
            <View className="flex-row items-center gap-5">
              <View className="border rounded-md border-primary/60 size-[24px]">
                <TouchableOpacity
                  className="items-center justify-center"
                  onPress={() => {}}
                >
                  <Text className=" text-primary">-</Text>
                </TouchableOpacity>
              </View>
              <Text>1</Text>
              <View className="border rounded-md border-primary/60 size-[24px]">
                <TouchableOpacity
                  onPress={() => {}}
                  className="items-center justify-center"
                >
                  <Text className=" text-primary">+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
