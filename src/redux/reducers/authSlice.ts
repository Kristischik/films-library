import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SignUpUserPayload } from "src/redux/@types";
import { ACCESS_TOKEN_KEY } from "src/utils/constants";

type InitialState = {
  accessToken: string;
};

const initialState: InitialState = {
  accessToken: localStorage.getItem(ACCESS_TOKEN_KEY) || "",
};

const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    signUpUser: (_, __: PayloadAction<SignUpUserPayload>) => {},
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
});

export const {
  signUpUser,

  setAccessToken,
} = authSlice.actions;

export const AuthSelectors = {};

export default authSlice.reducer;
