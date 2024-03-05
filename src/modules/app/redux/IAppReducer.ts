import { ColorSchemeName } from 'react-native'; 

export interface IAppReducer {
  isSignedIn?: boolean,
  userColorScheme?: ColorSchemeName,
  user?: any,
  token?: string,
  expoToken?: string,
}

