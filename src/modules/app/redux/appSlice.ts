import { IAppReducer } from "@modules/app/redux/IAppReducer";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IAppReducer = {
  hasSeenOnboarding: false,
};

export const appSlice = createSlice({
  name: "appReducer",
  initialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<any>) => {
      state = { ...state, authToken: action.payload };
      return state;
    },
    SetUser: (state, action: PayloadAction<any>) => {
      state = {
        ...state,
        isSignedIn: true,
        user: action.payload,
        hasSeenOnboarding: true,
      };
      return state;
    },
    LoggedOut: (state) => {
      state = { ...state, user: null, isSignedIn: false, authToken: "" };
      return state;
    },
    SetColorShceme: (state, action: PayloadAction<any>) => {
      state = { ...state, userColorScheme: action.payload };
      return state;
    },
    SetExpoToken: (state, action: PayloadAction<any>) => {
      state = { ...state, expoToken: action.payload };
      return state;
    },
    SetHasSeenOnboarding: (state, action: PayloadAction<boolean>) => {
      state = { ...state, hasSeenOnboarding: action.payload };
      return state;
    },
  },
});

export const {
  setAuthToken,
  SetUser,
  LoggedOut,
  SetColorShceme,
  SetExpoToken,
  SetHasSeenOnboarding,
} = appSlice.actions;

export const Logout = LoggedOut;

export default appSlice.reducer;
