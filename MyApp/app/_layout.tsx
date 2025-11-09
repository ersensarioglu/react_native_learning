import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Appearance, View } from 'react-native';
import { Colors } from '@/constants/theme';

const colorScheme = Appearance.getColorScheme();
const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

export default function RootLayout() {

  return (
    <>
      <Stack screenOptions={{ headerStyle: { backgroundColor: theme.headerBackground }, headerTintColor: theme.text, headerShadowVisible: false }}>
        <Stack.Screen name="index" options={{ headerShown: false, title: 'Home' }} />
        <Stack.Screen name="menu" options={{ headerShown: true, title: 'Menu', headerTitle: 'Coffee Shop Menu' }} />
        <Stack.Screen name="contact" options={{ headerShown: true, title: 'Contact', headerTitle: 'Contact Us' }} />

        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
