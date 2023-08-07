import { all, takeLatest, call, put } from "redux-saga/effects";
import { ApiResponse } from "apisauce";
import {
  PostListResponseData
} from "src/redux/@types";
import API from "src/utils/api";
import {
  getPostsList,
  setPostsList,

} from "src/redux/reducers/postSlice";


function* postWorker() {

  const response: ApiResponse<PostListResponseData> = yield call(
    API.getPosts,
  );
  if (response.ok && response.data) {
    yield put(setPostsList(response.data.results))
  } else {
    console.error("Sigh Up User error", response.problem);
  }
}



// function* postWorker() {
//   yield put(setSinglePostLoading(true));
//   const response: ApiResponse<PostListResponseData> = yield call(API.getPosts);
//   if (response.ok && response.data) {
//     yield put(setPostsList(response.data.results));
//   } else {
//     console.error("Sigh Up User error", response.problem);
//   }
//   yield put(setSinglePostLoading(false));
// }

// function* getSinglePostWorker(action: PayloadAction<string>) {
//   const response: ApiResponse<Post> = yield call(
//     API.getSinglePost,
//     action.payload
//   );
//   if (response.ok && response.data) {
//     yield put(setSinglePost(response.data));
//   } else {
//     console.error("Activate User error", response.problem);
//   }
// }

// function* getMyPostsWorker() {
//   yield put(setPostsListLoading(true));
//   const response: ApiResponse<PostListResponseData> = yield callCheckingAuth(
//     API.getMyPosts
//   );
//   if (response.status === 404) {
//     yield put(setMyPosts([]));
//     console.error("404", response.problem);
//   } else if (response.ok && response.data) {
//     yield put(setMyPosts(response.data.results));
//   } else {
//     console.error("Set My Posts error", response.problem);
//   }
//   yield put(setPostsListLoading(false));
// }
//
// function* getSearchedPostsWorker(
//   action: PayloadAction<GetSearchedPostsPayload>
// ) {
//   const { offset, search } = action.payload;
//   const response: ApiResponse<PostListResponseData> = yield call(
//     API.getPosts,
//     offset,
//     search
//   );
//   if (response.ok && response.data) {
//     const { results, count } = response.data;
//     yield put(
//       setSearchedPosts({
//         postsList: results,
//         total: count,
//       })
//     );
//   } else {
//     console.error("Searched Posts error", response.problem);
//   }
// }
//
// function* getPostsWorker(action: PayloadAction<GetPostsPayload>) {
//   yield put(setPostsListLoading(true));
//   const { offset, isOverwrite , ordering} = action.payload;
//   const response: ApiResponse<GetPostsResponseData> = yield call(
//     API.getPosts,
//     offset,
//     "",
//     ordering
//   );
//   if (response.ok && response.data) {
//     const { count, results } = response.data;
//     yield put(
//       setPostsList({
//         total: count,
//         postsList: results,
//         isOverwrite,
//       })
//     );
//   } else {
//     console.error("Get Posts List error", response.problem);
//   }
//   yield put(setPostsListLoading(false));
// }


export default function* postSagaWatcher() {
  yield all([
    takeLatest(getPostsList, postWorker),
    // takeLatest(getSinglePost, getSinglePostWorker),
    // takeLatest(getMyPosts, getMyPostsWorker),
    // takeLatest(getSearchedPosts, getSearchedPostsWorker),
    // takeLatest(getPostsList, getPostsWorker),
  ]);
}