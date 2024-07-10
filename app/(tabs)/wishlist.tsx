import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ScreenContent } from '@/components/ScreenContent';

export default function Wishlist() {
  return (
    <>
      <Stack.Screen options={{ title: 'Wishlist' }} />
      <View style={styles.container}>
        <ScreenContent path="app/(tabs)/wishlist.tsx" title="Wishlist" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
