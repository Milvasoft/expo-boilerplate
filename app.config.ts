// eslint-disable-next-line import/no-extraneous-dependencies
import { ExpoConfig, ConfigContext } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Milvasoft',
  description: 'Milvasoft',
  slug: 'milvasoft',
  version: '1.0.0',
  sdkVersion: '40.0.0',
  orientation: 'portrait',
  icon: './src/assets/image/icon.png',
  assetBundlePatterns: [
    './src/assets/image/*',
    './src/assets/svg/*'
  ],
  splash: {
    image: './src/assets/image/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  ios: {
    bundleIdentifier: 'com.milvasoft.milvasoft',
    buildNumber: '1.0.0'
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './src/assets/image/adaptive-icon.png',
      backgroundColor: '#ffffff',     
    },
    package: 'com.milvasoft.milvasoft',
    versionCode: 1,
    useNextNotificationsApi: true,
  },
  scheme: 'obk',
  userInterfaceStyle: 'automatic'

});
