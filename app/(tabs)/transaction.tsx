import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ScreenContent } from '@/components/ScreenContent';

export default function Transaction() {
  return (
    <>
      <Stack.Screen options={{ title: 'Transaction' }} />
      <View style={styles.container}>
        <ScreenContent path="app/(tabs)/transaction.tsx" title="Transaction" />
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
