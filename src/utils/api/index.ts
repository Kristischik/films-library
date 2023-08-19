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

const getPosts = () => {
  return API.get("/titles" , {limit: PER_PAGE, list: "top_boxoffice_200"});
};

const getSingleFilm = (id: string) => {
  return API.get(`/titles/${id}/`, {info: "base_info"});
};

const getSearchedFilms = (title: string, exact?: boolean, titleType?: string, page?: string, limit?: number) => {
  return API.get(`/titles/search/title/${title}`, {exact: false, titleType, page, limit});
}

export default {
  signUpUser,
  getPosts,
  getSingleFilm,
  getSearchedFilms,
};
