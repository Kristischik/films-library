import { PostsList } from "src/@types";

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
  page: number,
  next: string,
  entries: number,
  results: PostsList,
};




