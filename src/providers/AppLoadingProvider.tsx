import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import MontserratFont from "@assets/font";

SplashScreen.preventAutoHideAsync();

type Props = {
  children: React.ReactNode;
};

/**
 * Provides an app loading screen that preloads fonts and hides the splash screen
 * once the app is ready to render.
 *
 * @param {Props} props - The component props.
 * @param {ReactNode} props.children - The child components to render.
 * @returns {ReactElement | null} The rendered component.
 */
function AppLoadingProvider({ children }: Props) {
  const [fontsLoaded, fontError] = useFonts(MontserratFont);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      {children}
    </View>
  );
}

export default AppLoadingProvider;
