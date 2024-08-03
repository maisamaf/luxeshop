import "../global.css";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import { setCustomText } from "react-native-global-props";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// redux

import { store } from "@/store/configureStore";
import { Provider } from "react-redux";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();
const customTextProps = {
  style: {
    fontFamily: "fsregular",
  },
};
export default function RootLayout() {
  const [loaded, error] = useFonts({
    sfregular: require("../assets/fonts/sf-regular.ttf"),
    sfbold: require("../assets/fonts/sf-bold.ttf"),
    sfsemibold: require("../assets/fonts/sf-semibold.ttf"),
    "sfregular-italic": require("../assets/fonts/sf-regular-italic.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
      setCustomText(customTextProps);
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="cart"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="detail/[productId]"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </Provider>
    </GestureHandlerRootView>
  );
}
