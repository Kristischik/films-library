import {PostsList} from "src/@types";

export type PayloadWithDataAndCallback<Data> = {
  data: Data;
  callback: () => void;
};

export type SignUpUserData = {
  email: string;
  password: string;
  name: string,
  token_name: string;
};

export type SignUpUserPayload = PayloadWithDataAndCallback<SignUpUserData>;

  export type SignUpResponseData = {
  email: string;
  password: string;
  token_name: string;
  password_confirmation: string;
  boostrapData: {
    user: {
      access_token: string;
    };
  };

};

export type PostListResponseData = {
  count: number;
  next: string;
  previous: null;
  results: PostsList;
}

export type ActivateUserData = {
  email: string,
  password: string,
  device_name: string
};


export type ActivateUserPayload = PayloadWithDataAndCallback<ActivateUserData>;
//
// export type SignInData = {
//   email: string,
//   password: string,
// }
//
// export type SignInUserPayload = PayloadWithDataAndCallback<SignInData>
//
// export type SignInUserResponseData = {
//   access: string,
//   refresh: string,
// }
//
//
// export type UserInfoPayload = {
//   username: string,
//   id: number,
//   email: string,
// }
//
// export type GetPostsPayload = {
//   offset: number;
//   isOverwrite: boolean;
//   ordering?: string;
// };
//
// export type SetPostsListPayload = {
//   total: number;
//   postsList: PostsList;
//   isOverwrite: boolean;
// };
//
// export type GetPostsResponseData = {
//   count: number;
//   next: string;
//   previous: string;
//   results: PostsList;
// };
//
// export type GetSearchedPostsPayload = {
//   offset: number;
//   search: string;
// };
// export type SetSearchedPostsPayload = Omit<SetPostsListPayload, "isOverwrite">; // взяли тип и выбросили то, что не надо
//
//
// export type EditPostData = {
//   postId: number;
//   newData: any;
// };
//
// export type EditPostPayload = PayloadWithDataAndCallback<EditPostData>;
