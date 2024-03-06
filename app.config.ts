import { ExpoConfig, ConfigContext } from '@expo/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Milvasoft',
  description: 'Milvasoft App Description',
  slug: 'milvasoft',
  scheme: 'com.milvasoft.milvasoft',
  version: '1.0.0',
  sdkVersion: '50.0.0',
  orientation: 'portrait',
  icon: './src/assets/images/icon.png',
  userInterfaceStyle: 'automatic',
  jsEngine: 'hermes',
  updates: {
    enabled: true
  },
  assetBundlePatterns: [
    './src/assets/images/*'
  ],
  locales: {
    tr: './src/assets/languages/turkish.json',
    en: './src/assets/languages/english.json'
  },
  splash: {
    image: './src/assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  ios: {
    bundleIdentifier: 'com.milvasoft.milvasoft',
    buildNumber: '1.0.0',
    infoPlist: {
      CFBundleAllowMixedLocalizations: true
    }
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './src/assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff'
    },
    package: 'com.milvasoft.milvasoft',
    versionCode: 1,
  }

})
