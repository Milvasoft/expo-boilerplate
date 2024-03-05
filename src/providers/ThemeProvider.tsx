import React from "react";
import { useAppSelector } from "@src/store";
import { DarkTheme, LightTheme } from "@styles/theme";
import type { ITheme } from "@styles/theme";

export const ThemeContext = React.createContext<ITheme>(LightTheme);

type Props = {
  children: React.ReactNode;
};

function ThemeProvider({ children }: Props) {
  const userColorScheme = useAppSelector((s) => s?.AppReducer?.userColorScheme);
  const selectedTheme = userColorScheme === "dark" ? DarkTheme : LightTheme;
  return (
    <ThemeContext.Provider value={selectedTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
