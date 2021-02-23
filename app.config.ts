// WARNING THIS ISN'T VERSIONED
// eslint-disable-next-line import/no-extraneous-dependencies
import { ExpoConfig, ConfigContext } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'milvasoft',
  slug: 'milvasoft',   

});
