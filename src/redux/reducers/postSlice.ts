import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "src/redux/store";
import { Post, PostsList } from "src/@types";

type InitialState = {
  postsList: PostsList;
  isPostsListLoading: boolean,
  singleFilm: Post | null;
  singlePostLoading: boolean,
};

const initialState: InitialState = {
  postsList: [],
  isPostsListLoading: false,
  singleFilm: null,
  singlePostLoading: false,
};

const postSlice = createSlice({
  name: "postReducer",
  initialState,
  reducers: {
    getPostsList: (_, __: PayloadAction<undefined>) => {},
    setPostsList: (state, action: PayloadAction<PostsList>) => {
      state.postsList = action.payload;
    },
    setPostsListLoading: (state, action: PayloadAction<boolean>) => {
      state.isPostsListLoading = action.payload;
    },

    getSingleFilm: (_, __: PayloadAction<string>) => {},
    setSingleFilm: (state, action: PayloadAction<Post>) => {
      state.singleFilm = action.payload;
    },
    setSinglePostLoading: (state, action: PayloadAction<boolean>) => {
      state.singlePostLoading = action.payload;
    },
  },
});

export const {
  setPostsList,
  getPostsList,
  setPostsListLoading,
  getSingleFilm,
  setSingleFilm,
  setSinglePostLoading,
} = postSlice.actions;

export const PostSelectors = {
  getPostsList: (state: RootState) => state.postReducer.postsList,
  getPostsListLoading: (state: RootState) =>
    state.postReducer.isPostsListLoading,
  getSingleFilm: (state: RootState) => state.postReducer.singleFilm,
  getSinglePostLoading: (state: RootState) =>
    state.postReducer.singlePostLoading,

};

export default postSlice.reducer;
