import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "src/redux/store";
import {  Post, PostsList } from "src/@types";


type InitialState = {
  postsList: PostsList;
};

const initialState: InitialState = {
  postsList: [],
};

const postSlice = createSlice({
  name: "postReducer",
  initialState,
  reducers: {
    getPostsList: (_, __: PayloadAction<undefined>) => {},
    setPostsList: (state, action: PayloadAction<PostsList>) => {
      state.postsList = action.payload;
    },

  },
});

export const {
  setPostsList,
  getPostsList,
} = postSlice.actions;

export const PostSelectors = {
  getPostsList: (state: RootState) => state.postReducer.postsList,
};

export default postSlice.reducer;
