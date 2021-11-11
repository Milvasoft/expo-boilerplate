// eslint-disable-next-line import/no-extraneous-dependencies
import { ExpoConfig, ConfigContext } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'milvasoft',
  description: 'Milvasoft',
  slug: 'milvasoft',
  version: '1.0.0',
  sdkVersion: '43.0.0',
  orientation: 'portrait',
  icon: './src/assets/images/icon.png',
  assetBundlePatterns: [
    './src/assets/images/*',
    './src/assets/svg/*'
  ],
  splash: {
    image: './src/assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  ios: {
    bundleIdentifier: 'com.milvasoft.milvasoft',
    buildNumber: '1.0.0'
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './src/assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',     
    },
    package: 'com.milvasoft.milvasoft',
    versionCode: 1,
    useNextNotificationsApi: true,
  },
  scheme: 'milvasoft',
  userInterfaceStyle: 'automatic'

});
