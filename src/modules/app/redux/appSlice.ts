import { IAppReducer } from '@helpers/Types/IApp';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: IAppReducer = {};

export const appSlice = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    SetUser: (state, action: PayloadAction<any>) => {

      state = { ...state, isSignedIn: true, user: action.payload };
    
    },
    ClearUser: (state) => {

      state = { ...state, user: {}, isSignedIn: false };

      return state;
    
    },
    SetColorShceme: (state, action: PayloadAction<any>) => {
        
      state = { ...state, userColorScheme: action.payload };
      
    },
    SetExpoToken: (state, action: PayloadAction<any>) => {
        
      state = { ...state, expoToken: action.payload };
      
    }

  },
});

export const { 
  SetUser,
  ClearUser,
  SetColorShceme,
  SetExpoToken
} = appSlice.actions;

export default appSlice.reducer;
