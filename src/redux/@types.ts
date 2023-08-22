import { Post, PostsList } from "src/@types";

export type PayloadWithDataAndCallback<Data> = {
  data: Data;
  callback: () => void;
};

export type SignUpUserData = {
  email: string;
  password: string;
  name: string;
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
  page: number;
  next: string;
  entries: number;
  results: PostsList;
};

export type SingleFilmResponseData = {
  page: number;
  next: string;
  entries: number;
  results: Post;
};


export type SetSearchedPostsPayload = Omit<SetPostsListPayload, "isOverwrite">; // взяли тип и выбросили то, что не надо

export type SetPostsListPayload = {
  total: number;
  postsList: PostsList;
};

export type GetPostsPayload = {
  page: number;
};

export type GetSearchPostsPayload = {
 title: string,
  page: number;
};

export type SearchListResponseData = {
 count: number,
  page: number;
  next: string;
  entries: number;
  results: PostsList;
};