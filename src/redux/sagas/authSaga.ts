import { all, takeLatest, call, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse } from "apisauce";

import {
  setAccessToken,
  signUpUser,
} from "src/redux/reducers/authSlice";
import {
  SignUpResponseData,
  SignUpUserPayload,
} from "src/redux/@types";
import API from "src/utils/api";
import {ACCESS_TOKEN_KEY} from "src/utils/constants";


function* sighUpUserWorker(action: PayloadAction<SignUpUserPayload>) {
  const { data, callback } = action.payload;
  const response: ApiResponse<SignUpResponseData> = yield call(
    API.signUpUser,
    data
  );
  if (response.ok && response.data) {
    yield put(setAccessToken(response.data.token_name))
    localStorage.setItem(ACCESS_TOKEN_KEY, response.data.token_name)
    callback();
  } else {
    console.error("Sigh Up User error", response.problem);
  }
}


export default function* authSagaWatcher() {
  yield all([
    takeLatest(signUpUser, sighUpUserWorker),
  ]);
}
