import { create } from "apisauce";
import {SignUpUserData} from "src/redux/@types";


const API = create({
  baseURL: "https://moviesdatabase.p.rapidapi.com",
  headers: {
    'X-RapidAPI-Key': 'b355c33b06msh7b55f05eb8a920bp18c93ejsnea1e9b02fa3b',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
});

const signUpUser = (data: SignUpUserData) => {
  return API.post("/auth/register", data);
};

const getPosts = () => {
  return API.get("/titles");
};


export default {
  signUpUser,
  getPosts,
};
