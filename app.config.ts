import { ExpoConfig, ConfigContext } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Expo Boilerplate",
  description: "Production-ready Expo boilerplate with TypeScript",
  slug: "expo-boilerplate",
  scheme: "expo-boilerplate",
  version: "2.0.0",
  orientation: "portrait",
  icon: "./src/assets/images/icon.png",
  userInterfaceStyle: "automatic",
  runtimeVersion: {
    policy: "appVersion",
  },
  locales: {
    tr: "./src/assets/languages/turkish.json",
    en: "./src/assets/languages/english.json",
  },
  newArchEnabled: true,
  ios: {
    bundleIdentifier: "com.expoboilerplate.app",
    buildNumber: "2.0.0",
    supportsTablet: true,
    infoPlist: {
      CFBundleAllowMixedLocalizations: true,
    },
  },
  web: {
    bundler: "metro",
    favicon: "./src/assets/images/icon.png",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./src/assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: "com.expoboilerplate.app",
    versionCode: 2,
  },
  updates: {
    enabled: true,
    url: "https://u.expo.dev/49e4e24d-c928-4ff1-815d-f1a58ca580bd",
  },
  extra: {
    eas: {
      projectId: "49e4e24d-c928-4ff1-815d-f1a58ca580bd",
    },
  },
  plugins: [
    "expo-font",
    "expo-localization",
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./src/assets/images/splash.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
    ],
    "expo-haptics",
  ],
});
