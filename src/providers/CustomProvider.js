import React from 'react';
import AuthProvider from './Auth';
import FontProvider from './Font';
import LocalizationProvider from './Localization';
import ErrorProvider from './Error';

/**
 * Providers for `global` transactions.
   The `CustomProvider` is used to `monitor` and take action at every moment of the application.
 */
export default function CustomProvider({ children }) {

  return (
    <>
      <ErrorProvider>
        <AuthProvider>
          <LocalizationProvider>
            <FontProvider>
              {children}
            </FontProvider>
          </LocalizationProvider>
        </AuthProvider>
      </ErrorProvider>
    </>
  );

}
