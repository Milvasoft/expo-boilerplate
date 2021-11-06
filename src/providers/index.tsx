/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import React from 'react';
import './Error';
import './NetworkInfo';
import AppLoadingProvider from './AppLoadingProvider';
import './Localization';
import FontProvider from './Font';
import Notification from './Notification';
   
 type Props = {
   children: React.ReactNode
 };

/**
 * Providers for `global` transactions.
   The `CustomProvider` is used to `monitor` and take action at every moment of the application.
 */   
function CustomProvider({ children }:Props) {

  return (
    <>
      <AppLoadingProvider>
        <Notification>
          <FontProvider>
            {children}
          </FontProvider>
        </Notification>
      </AppLoadingProvider>
    </>
  );

}
   
export default CustomProvider;
   
