import React, { useEffect } from "react";
import { Appearance } from "react-native";
import throttle from "lodash.throttle";
import { useDispatch } from "react-redux";
import { SetColorShceme } from "@modules/app/redux/appSlice";

/**
 * Listens for changes in the device's color scheme and dispatches an action to update the app's theme accordingly.
 */
export default function ThemeListener() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleColorModeChange = async (
      preferences: Appearance.AppearancePreferences
    ) => {
      dispatch(SetColorShceme(preferences?.colorScheme));
    };

    Appearance.addChangeListener(
      throttle(handleColorModeChange, 100, { leading: false, trailing: true })
    );

    return () => {};
  }, [dispatch]);

  return <></>;
}
