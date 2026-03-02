import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LightTheme, DarkTheme, type Theme } from "@/constants/theme";
import type { RootState } from "./index";

interface AppState {
  isSignedIn: boolean;
  colorScheme: "light" | "dark";
  user: { name: string } | null;
  authToken: string | null;
  expoToken: string | null;
}

const initialState: AppState = {
  isSignedIn: false,
  colorScheme: "light",
  user: null,
  authToken: null,
  expoToken: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAuthToken(state, action: PayloadAction<string | null>) {
      state.authToken = action.payload;
    },
    setUser(state, action: PayloadAction<{ name: string }>) {
      state.user = action.payload;
      state.isSignedIn = true;
    },
    logout(state) {
      state.user = null;
      state.isSignedIn = false;
      state.authToken = null;
    },
    setColorScheme(state, action: PayloadAction<"light" | "dark">) {
      state.colorScheme = action.payload;
    },
    setExpoToken(state, action: PayloadAction<string>) {
      state.expoToken = action.payload;
    },
  },
});

export const { setAuthToken, setUser, logout, setColorScheme, setExpoToken } =
  appSlice.actions;

export const selectIsSignedIn = (state: RootState) => state.app.isSignedIn;
export const selectColorScheme = (state: RootState) => state.app.colorScheme;
export const selectUser = (state: RootState) => state.app.user;
export const selectAuthToken = (state: RootState) => state.app.authToken;

export const selectTheme = (state: RootState): Theme =>
  state.app.colorScheme === "dark" ? DarkTheme : LightTheme;

export default appSlice.reducer;
