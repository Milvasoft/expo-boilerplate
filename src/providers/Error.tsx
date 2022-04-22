/* eslint-disable @typescript-eslint/no-unused-vars */
import * as ErrorRecovery from 'expo-error-recovery';
import { Platform } from 'react-native';


if (Platform.OS !== 'web') {

  const defaultErrorHandler = ErrorUtils.getGlobalHandler();

  const globalErrorHandler = (err: any, isFatal: any) => {
  
    console.log('globalErrorHandler called!');
    ErrorRecovery.setRecoveryProps({ info: err });
    defaultErrorHandler(err, isFatal);
  
  };
  
  ErrorUtils.setGlobalHandler(globalErrorHandler);   

} else if (Platform.OS === 'web' && window !== undefined) {

  window.addEventListener('error', (event) => {    

    console.log('globalErrorHandler called!');

    ErrorRecovery.setRecoveryProps({ info: event });
  
  });

}
