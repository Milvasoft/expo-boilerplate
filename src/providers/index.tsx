/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import React from 'react';
import AppLoadingProvider from './AppLoadingProvider';
import FontProvider from './Font';
import LocalizationProvider from './Localization';
import ErrorProvider from './Error';
import Notification from './Notification';
   
 type Props = {
   children: React.ReactNode
 };

/**
 * Providers for `global` transactions.
   The `CustomProvider` is used to `monitor` and take action at every moment of the application.
 */   
const CustomProvider : React.FC<Props> = ({ children }) => (
  <>
    <ErrorProvider>
      <AppLoadingProvider>
        <Notification>
          <LocalizationProvider>
            <FontProvider>
              {children}
            </FontProvider>
          </LocalizationProvider>
        </Notification>
      </AppLoadingProvider>
    </ErrorProvider>
  </>
);
   
export default CustomProvider;
   
