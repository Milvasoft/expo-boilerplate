/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import React, { useEffect } from "react";
import { enableScreens } from "react-native-screens";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import * as ScreenOrientation from "expo-screen-orientation";
import { Platform } from "react-native";
import RootNavigation from "./src/routers";
import CustomProvider from "./src/providers";
import store from "./src/utils/redux/store";
import ErrorBounday from "./src/providers/ErrorProvider";

enableScreens();

function App() {
  useEffect(() => {
    if (Platform.OS !== "web") {
      // TODO: Orientation Congihuration
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
    }
  }, []);

  return (
    <ErrorBounday>
      <Provider store={store}>
        <CustomProvider>
          <RootNavigation />
        </CustomProvider>
      </Provider>
    </ErrorBounday>
  );
}

export default App;
