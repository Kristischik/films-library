import { all, takeLatest, call, put } from "redux-saga/effects";
import { ApiResponse } from "apisauce";
import {

  PostListResponseData, SingleFilmResponseData
} from "src/redux/@types";
import API from "src/utils/api";
import {
  getPostsList, getSearchedFilms, getSingleFilm,
  setPostsList, setPostsListLoading, setSearchedFilms, setSingleFilm, setSinglePostLoading,

} from "src/redux/reducers/postSlice";
import {PayloadAction} from "@reduxjs/toolkit";



// function* postWorker() {
//   yield put(setPostsListLoading(true));
//   const response: ApiResponse<PostListResponseData> = yield call(
//     API.getPosts,
//   );
//   if (response.ok && response.data) {
//     yield put(setPostsList(response.data.results))
//   } else {
//     console.error("Post List error", response.problem);
//   }
//   yield put(setPostsListLoading(false));
// }

function* postWorker() {
  yield put(setPostsListLoading(true));
  const response: ApiResponse<PostListResponseData> = yield call(
    API.getPosts,

  );
  if (response.ok && response.data) {
    const { results, page } = response.data;
    yield put(setPostsList({postsList: results, total: page}))
  } else {
    console.error("Post List error", response.problem);
  }
  yield put(setPostsListLoading(false));
}


function* getSingleFilmWorker(action: PayloadAction<string>) {
  yield put(setSinglePostLoading(true));
  const response: ApiResponse<SingleFilmResponseData | null> = yield call(
    API.getSingleFilm,
    action.payload
  );
  if (response.ok && response.data) {
    yield put(setSingleFilm(response.data.results));
  } else {
    console.error("Single Post error", response.problem);
  }
  yield put(setSinglePostLoading(false));
}


function* getSearchedFilmsWorker(action: PayloadAction<string>) {
  yield put(setPostsListLoading(true));
  const response: ApiResponse<PostListResponseData> = yield call(
    API.getSearchedFilms,
    action.payload,
  );
  if (response.ok && response.data) {
    yield put(setSearchedFilms(response.data.results))
  } else {
    console.error("Search error", response.problem);
  }
  yield put(setPostsListLoading(false));
}


export default function* postSagaWatcher() {
  yield all([
    takeLatest(getPostsList, postWorker),
    takeLatest(getSingleFilm, getSingleFilmWorker),
    takeLatest(getSearchedFilms, getSearchedFilmsWorker),

  ]);
}
