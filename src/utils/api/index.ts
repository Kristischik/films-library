import { create } from "apisauce";
import {SignUpUserData} from "src/redux/@types";
import {PER_PAGE} from "src/utils/constants";


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

const getPosts = ( limit: number, page?: string,) => {
  return API.get("/titles" , {info: "base_info", limit: PER_PAGE, sort: 'year.decr', list: 'top_boxoffice_200', page});
};

const getSingleFilm = (id: string) => {
  return API.get(`/titles/${id}/`, {info: "base_info"});
};

const getSearchedFilms = (title: string, page?: number) => {
  return API.get(`/titles/search/title/${title}`, { info: "base_info", exact: false, limit: 10, page});
}

const getTrendPosts = () => {
  return API.get("/titles/random", {info: "base_info", sort: 'year.decr', list: 'top_boxoffice_200', limit: 10});

};


export default {
  signUpUser,
  getPosts,
  getSingleFilm,
  getSearchedFilms,
  getTrendPosts
};
