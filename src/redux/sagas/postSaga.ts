import { all, takeLatest, call, put } from "redux-saga/effects";
import { ApiResponse } from "apisauce";
import {
  GetPostsPayload, GetSearchPostsPayload,

  PostListResponseData, SearchListResponseData, SingleFilmResponseData
} from "src/redux/@types";
import API from "src/utils/api";
import {
  getPostsList,
  getSearchedFilms,
  getSingleFilm, getTrendPosts,
  setPostsList,
  setPostsListLoading,
  setSearchedFilms,
  setSingleFilm,
  setSinglePostLoading,
  setTrendPosts,
  setTrendPostsLoading,
} from "src/redux/reducers/postSlice";
import {PayloadAction} from "@reduxjs/toolkit";


// function* postWorker() {
//   yield put(setPostsListLoading(true));
//   const response: ApiResponse<PostListResponseData> = yield call(
//     API.getPosts,
//
//   );
//   if (response.ok && response.data) {
//     const { results, page } = response.data;
//     yield put(setPostsList({postsList: results, total: page}))
//   } else {
//     console.error("Post List error", response.problem);
//   }
//   yield put(setPostsListLoading(false));
// }


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

// function* getSearchedFilmsWorker(
//   action: PayloadAction<GetSearchPostsPayload>
// ) {
//   const { title,page } = action.payload;
//   const response: ApiResponse<SearchListResponseData> = yield call(
//     API.getSearchedFilms,
//     title,
//     page,
//   );
//   if (response.ok && response.data) {
//     const { results, count } = response.data;
//     yield put(
//       setSearchedFilms({
//         postsList: results,
//         total: count,
//       })
//     );
//   } else {
//     console.error("Searched Posts error", response.problem);
//   }
// }

function* getPostsWorker(action: PayloadAction<GetPostsPayload>) {
  yield put(setPostsListLoading(true));
  const { page } = action.payload;
  const response: ApiResponse<PostListResponseData> = yield call(
    API.getPosts,
    page,
  );
  if (response.ok && response.data) {
    const { page, results } = response.data;
    yield put(
      setPostsList({
        total: page,
        postsList: results,
      })
    );
  } else {
    console.error("Get Posts List error", response.problem);
  }
  yield put(setPostsListLoading(false));
}

function* getTrendPostsWorker() {
  yield put(setTrendPostsLoading(true));
  const response: ApiResponse<PostListResponseData | null> = yield call(
    API.getTrendPosts,
  )
  if (response.data) {
    yield put(setTrendPosts(response.data.results))
  } else {
    console.error('Trend Posts error', response.problem);
  }
  yield put(setTrendPostsLoading(false));
}



export default function* postSagaWatcher() {
  yield all([
    takeLatest(getPostsList, getPostsWorker),
    takeLatest(getSingleFilm, getSingleFilmWorker),
    takeLatest(getSearchedFilms, getSearchedFilmsWorker),
    takeLatest(getTrendPosts, getTrendPostsWorker),
  ]);
}
