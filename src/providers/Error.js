/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import * as React from 'react';
import * as ErrorRecovery from 'expo-error-recovery';

const defaultErrorHandler = ErrorUtils.getGlobalHandler();

const globalErrorHandler = (err, isFatal) => {

  console.log('globalErrorHandler called!');
  ErrorRecovery.setRecoveryProps({ info: err });
  defaultErrorHandler(err, isFatal);

};

ErrorUtils.setGlobalHandler(globalErrorHandler);   

/**
 * To `catch` errors in the application and `restart` the application
 */
export default function ErrorProvider({ children }) {

  return (
    <>
      {children}
    </>
  );

}
