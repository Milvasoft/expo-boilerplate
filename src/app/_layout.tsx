import { useEffect, useCallback } from "react";
import { Platform, useColorScheme } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as ScreenOrientation from "expo-screen-orientation";
import { Provider } from "react-redux";
import MontserratFont from "@/assets/font";
import { store } from "@/store";
import { useAppDispatch } from "@/store/hooks";
import { setColorScheme } from "@/store/appSlice";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { NetworkProvider } from "@/providers/NetworkProvider";
import { NotificationProvider } from "@/providers/NotificationProvider";
import { ToastProvider } from "@/providers/ToastProvider";

SplashScreen.preventAutoHideAsync();

function RootLayoutInner() {
  const colorScheme = useColorScheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const scheme = colorScheme === "dark" ? "dark" : "light";
    dispatch(setColorScheme(scheme));
  }, [colorScheme, dispatch]);

  return (
    <>
      <StatusBar style="auto" />
      <ErrorBoundary>
        <NetworkProvider>
          <ToastProvider>
            <NotificationProvider>
              <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(tabs)" />
                <Stack.Screen
                  name="login"
                  options={{ gestureEnabled: false }}
                />
                <Stack.Screen
                  name="post/[id]"
                  options={{ headerShown: true, title: "Post" }}
                />
                <Stack.Screen
                  name="settings"
                  options={{ headerShown: true, title: "Settings" }}
                />
              </Stack>
            </NotificationProvider>
          </ToastProvider>
        </NetworkProvider>
      </ErrorBoundary>
    </>
  );
}

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts(MontserratFont);

  useEffect(() => {
    if (Platform.OS !== "web") {
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
    }
  }, []);

  const onLayoutReady = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    onLayoutReady();
  }, [onLayoutReady]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Provider store={store}>
      <RootLayoutInner />
    </Provider>
  );
}
