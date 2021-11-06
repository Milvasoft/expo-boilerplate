import * as ErrorRecovery from 'expo-error-recovery';

const defaultErrorHandler = ErrorUtils.getGlobalHandler();

const globalErrorHandler = (err: any, isFatal: any) => {

  console.log('globalErrorHandler called!');
  ErrorRecovery.setRecoveryProps({ info: err });
  defaultErrorHandler(err, isFatal);

};

ErrorUtils.setGlobalHandler(globalErrorHandler);   


