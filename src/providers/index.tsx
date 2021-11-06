/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import React from 'react';
import AppLoadingProvider from './AppLoadingProvider';
import FontProvider from './Font';
import './Localization';
import './Error';
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
   
