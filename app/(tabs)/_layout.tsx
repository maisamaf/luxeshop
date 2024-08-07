import { Text, TouchableOpacity, View } from "react-native";
import { Tabs } from "expo-router";

import { TabBarIcon } from "@/components/TabBarIcon";
import CustomIcon from "@/components/icon";
import { PRIMARY } from "@/utils/colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: PRIMARY,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="House" color={color} />,
          headerLeft: () => {
            return (
              <View className="flex-row items-center gap-2 ml-4">
                <CustomIcon name="Chrome" color={PRIMARY} size={32} />
                <Text className="font-semibold">Luxeshop</Text>
              </View>
            );
          },
          headerRight: () => (
            <View className="flex-row gap-x-2.5 mx-4">
              <TouchableOpacity className="items-center justify-center p-1.5 border rounded-md border-grey/40">
                <CustomIcon name="ShoppingBag" size={16} isGray />
              </TouchableOpacity>
              <TouchableOpacity className="items-center justify-center p-1.5 border rounded-md border-grey/40">
                <CustomIcon name="Bell" size={16} isGray />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => <TabBarIcon name="Search" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          title: "Transaction",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="FileText" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="User" color={color} />,
        }}
      />
    </Tabs>
  );
}
