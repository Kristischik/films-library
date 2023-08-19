import React, { useEffect } from "react";
import Title from "src/components/Title";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RoutesList } from "src/pages/Router";
import { getSearchedFilms, PostSelectors } from "src/redux/reducers/postSlice";
import Card from "src/components/Card";
import { useThemeContext } from "src/context/Theme";
import classNames from "classnames";
import styles from "./Search.module.scss";
import { Theme } from "src/@types";

const Search = () => {
  const { themeValue } = useThemeContext();
  const { search } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchedFilms = useSelector(PostSelectors.getSearchedFilms);

  useEffect(() => {
    if (!search) {
      navigate(RoutesList.Home);
    } else {
      dispatch(getSearchedFilms(search));
    }
  }, [dispatch, navigate, search]);

  return (
    <div
      className={classNames(styles.searchContainer, {
        [styles.lightSearchContainer]: themeValue === Theme.Light,
      })}
    >
      <Title title={`Search results: "${search}"`} />
      <div className={styles.cardsContainer}>
        {searchedFilms.map((post) => {
          return <Card {...post} />;
        })}
      </div>
    </div>
  );
};

export default Search;
