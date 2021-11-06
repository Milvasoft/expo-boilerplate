
export interface IAppReducer {
  isSignedIn?: boolean,
  userColorScheme?: string,
  user?: any,
}
export enum ToastColorEnum {
  Error = '#F44336', 
  Succes = '#4CAF50',
  Warning = '#FF9800', 
  Info = '#2196F3'
}
