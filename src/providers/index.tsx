/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import React from "react";
import NetworkInfoContainer from "./NetworkInfoContainer";
import AppLoadingProvider from "./AppLoadingProvider";
import "./Localization";
import Toast from "./Toast";
import Notification from "./Notification";
import ThemeProvider from "./ThemeProvider";
import ThemeListener from "./ThemeListener";
import { BottomSheetContainer } from "@src/components";

type Props = {
  children: React.ReactNode;
};

/**
 * Providers for `global` transactions.
 * The `CustomProvider` is used to `monitor` and take action at every moment of the application.
 */
function CustomProvider({ children }: Props) {
  return (
    <AppLoadingProvider>
      <NetworkInfoContainer>
        <ThemeProvider>
          <BottomSheetContainer>
            <Toast />

            <Notification />

            {children}

            <ThemeListener />
          </BottomSheetContainer>
        </ThemeProvider>
      </NetworkInfoContainer>
    </AppLoadingProvider>
  );
}

export default CustomProvider;
