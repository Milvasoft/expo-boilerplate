/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import React from 'react';
import AuthProvider from './Auth';
import FontProvider from './Font';
import LocalizationProvider from './Localization';
import ErrorProvider from './Error';
import Notification from './Notification';

/**
 * Providers for `global` transactions.
   The `CustomProvider` is used to `monitor` and take action at every moment of the application.
 */
export default function CustomProvider({ children }) {

  return (
    <>
      <ErrorProvider>
        <AuthProvider>
          <Notification>
            <LocalizationProvider>
              <FontProvider>
                {children}
              </FontProvider>
            </LocalizationProvider>
          </Notification>
        </AuthProvider>
      </ErrorProvider>
    </>
  );

}
