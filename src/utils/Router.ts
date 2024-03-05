import { createNavigationContainerRef, StackActions } from '@react-navigation/native';
import Routes, { NavigationParams } from '@utils/Routes';

export const navigationRef = createNavigationContainerRef<NavigationParams>();

export function push<RouteName extends keyof NavigationParams>(name: Routes, params?: NavigationParams[RouteName]) {
  
  if (navigationRef.isReady()) navigationRef.current?.dispatch(StackActions.push(name, params));

}

export function pop(count:number) {
  
  if (navigationRef.isReady()) navigationRef.current?.dispatch(StackActions.pop(count));

}

export function navigate<RouteName extends keyof NavigationParams>(name: Routes, params?: NavigationParams[RouteName]) {

  if (navigationRef.isReady()) navigationRef.navigate(name, params);

}

export function goBack() {

  if (navigationRef.isReady()) navigationRef.current?.goBack();

}
