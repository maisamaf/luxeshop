import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomIcon from "@/components/icon";
import { StatusBar } from "expo-status-bar";
import Search from "@/components/search";

export default function Home() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="h-full bg-white ">
        <View className="flex-row justify-between gap-4 py-4">
          <View className="flex-row items-center gap-2 ml-4">
            <CustomIcon name="Chrome" color="#FA5A2A" size={32} />
            <Text className="font-semibold">Luxeshop</Text>
          </View>

          <View className="mx-4 flex-row gap-x-2.5">
            <TouchableOpacity className="border-grey/40 items-center justify-center rounded-md border p-1.5">
              <CustomIcon name="ShoppingBag" size={16} isGray />
            </TouchableOpacity>
            <TouchableOpacity className="border-grey/40 items-center justify-center rounded-md border p-1.5">
              <CustomIcon name="Bell" size={16} isGray />
            </TouchableOpacity>
          </View>
        </View>
        <View className="mx-4">
          <Search />
        </View>
      </ScrollView>

      <StatusBar hidden />
    </SafeAreaView>
  );
}
