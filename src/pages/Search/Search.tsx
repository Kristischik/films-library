import React, {useEffect} from "react";
import Title from "src/components/Title";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {RoutesList} from "src/pages/Router";
import {getSearchedFilms} from "src/redux/reducers/postSlice";

const Search = () => {
  const { search } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!search) {
  //     navigate(RoutesList.Home);
  //   } else {
  //     dispatch(getSearchedFilms());
  //   }
  // }, [dispatch, navigate, search]);


  return (
    <div>
      <Title title={`Search results: "${search}"`} />

    </div>
  );
};

export default Search;