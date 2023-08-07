import { create } from "apisauce";
import {ActivateUserData, SignUpUserData} from "src/redux/@types";
import { PER_PAGE } from "src/utils/constants";

const API = create({
  baseURL: "https://unelmamovie.com/api/v1",
  //   это основной url, к которому хвостики присоединяем нужных запросов
});

const signUpUser = (data: SignUpUserData) => {
  return API.post("/auth/register", data);
};

const getPosts = () => {
  return API.get("/titles/");
};


const activateUser = (data: ActivateUserData) => {
  return API.post("/auth/users/activation/", data);
};
//
// const getSinglePost = (id: string) => {
//   return API.get(`/blog/posts/${id}/`);
// };
//
// const createToken = (data: SignInData) => {
//   return API.post("/auth/jwt/create/", data);
// };
//
// const getUserInfo = (token: string) => {
//   return API.get(
//     "/auth/users/me/",
//     {},
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
// };
//
// const verifyToken = (token: string) => {
//   return API.post("/auth/jwt/verify/", { token });
// };



// eslint-disable-next-line import/no-anonymous-default-export
export default {
  signUpUser,
  getPosts,
  activateUser,
  // getSinglePost,
  // createToken,
  // getUserInfo,
  // verifyToken,
};
