import {useEffect, useState} from "react";
import classNames from "classnames";
import {
  getPostsList,
  PostSelectors,
} from "src/redux/reducers/postSlice";
import {PostsList, Theme} from "src/@types";
import { useThemeContext } from "src/context/Theme";
import { useDispatch, useSelector } from "react-redux";


import CardList from "src/components/CardList";

import styles from "./Home.module.scss";

const Home = () => {

  const dispatch = useDispatch();
  const { themeValue } = useThemeContext();

  const cardsList = useSelector(PostSelectors.getPostsList)

  useEffect(() => {
      dispatch(getPostsList());
  }, [])


  return (
    <div
      className={classNames(styles.container, {
        [styles.darkContainer]: themeValue === Theme.Dark,
      })}
    >
      <CardList cardsList={cardsList} />

    </div>
  );
};

export default Home;
