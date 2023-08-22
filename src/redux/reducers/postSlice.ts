import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "src/redux/store";
import {Post, PostsList} from "src/@types";
import {GetPostsPayload, GetSearchPostsPayload, SetPostsListPayload} from "src/redux/@types";

type InitialState = {
  postsList: PostsList;
  isPostsListLoading: boolean,
  singleFilm: Post | null;
  singlePostLoading: boolean,
  searchedFilms: PostsList,
  totalCount: number;
  savedPosts: PostsList,
  trendPosts: PostsList,
  trendPostsLoading: boolean,
};

const initialState: InitialState = {
  postsList: [],
  isPostsListLoading: false,
  singleFilm: null,
  singlePostLoading: false,
  searchedFilms: [],
  totalCount: 0,
  savedPosts: [],
  trendPosts: [],
  trendPostsLoading: false
};

const postSlice = createSlice({
  name: "postReducer",
  initialState,
  reducers: {
    // getPostsList: (_, __: PayloadAction<undefined>) => {},
    // setPostsList: (state, action: PayloadAction<PostsList>) => {
    //   state.postsList = action.payload;
    // },

    getPostsList: (_, __: PayloadAction<GetPostsPayload>) => {},
    setPostsList: (
      state,
      action: PayloadAction<SetPostsListPayload>
    ) => {
      const { total, postsList } = action.payload;
      state.totalCount = total;
      state.postsList.push(...postsList);
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

    // getSearchedFilms: (_, __: PayloadAction<GetSearchPostsPayload>) => {},
    // setSearchedFilms: (state, action: PayloadAction<SetPostsListPayload>) => {
    //   const { total, postsList } = action.payload;
    //   state.totalCount = total;
    //   state.searchedFilms.push(...postsList);
    // },

    getSearchedFilms: (_, __: PayloadAction<string>) => {},
    setSearchedFilms: (state, action: PayloadAction<PostsList>) => {
      state.searchedFilms = action.payload;
    },


    clearSearchedPosts: (state) => {
      state.searchedFilms = [];
    },

    setSaveStatus: (state, action: PayloadAction<{ card: Post}>) => {
      const { card } = action.payload;
      const savedIndex = state.savedPosts.findIndex(
        (item) => item.id === card.id
      );
      if (savedIndex === -1) {
        state.savedPosts.push(card)
      } else
        state.savedPosts.splice(savedIndex, 1)
    },

    getTrendPosts: (_, __: PayloadAction<undefined>) => { },
    setTrendPosts: (state, action: PayloadAction<PostsList>) => {
      state.trendPosts = action.payload
    },
    setTrendPostsLoading: (state, action: PayloadAction<boolean>) => {
      state.trendPostsLoading = action.payload;
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
  getSearchedFilms,
  setSearchedFilms,
  setSaveStatus,
  clearSearchedPosts,
  getTrendPosts,
  setTrendPosts,
  setTrendPostsLoading,
} = postSlice.actions;

export const PostSelectors = {
  getPostsList: (state: RootState) => state.postReducer.postsList,
  getTotalPostsList: (state: RootState) =>
    state.postReducer.totalCount,
  getPostsListLoading: (state: RootState) =>
    state.postReducer.isPostsListLoading,
  getSingleFilm: (state: RootState) => state.postReducer.singleFilm,
  getSinglePostLoading: (state: RootState) =>
    state.postReducer.singlePostLoading,
  getSearchedFilms: (state: RootState) => state.postReducer.searchedFilms,
  getTotalSearchedPosts: (state: RootState) =>
    state.postReducer.totalCount,

  getSavedPosts: (state: RootState) => state.postReducer.savedPosts,

  getTrendPosts: (state: RootState) => state.postReducer.trendPosts,
  getTrendPostsLoading: (state: RootState) => state.postReducer.trendPostsLoading,

};

export default postSlice.reducer;
