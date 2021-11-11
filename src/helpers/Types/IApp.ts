import { ColorSchemeName } from 'react-native'; 

export interface IAppReducer {
  isSignedIn?: boolean,
  userColorScheme?: ColorSchemeName,
  user?: any,
}
export interface IToastType{  
  msg: string,
  duration?: number,
  type?: ToastColorEnum,
  
}
export enum ToastColorEnum {
  Error = '#F44336', 
  Succes = '#4CAF50',
  Warning = '#FF9800', 
  Info = '#2196F3'
}
