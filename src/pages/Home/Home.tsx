import React, {useEffect, useState} from "react";
import classNames from "classnames";
import {
  getPostsList,
  PostSelectors,
} from "src/redux/reducers/postSlice";
import {Theme} from "src/@types";
import { useThemeContext } from "src/context/Theme";
import { useDispatch, useSelector } from "react-redux";
import CardList from "src/components/CardList";

import styles from "./Home.module.scss";
import Button from "src/components/Button";
import {ButtonTypes} from "src/components/Button/Button";
import {RoutesList} from "src/pages/Router";


const Home = () => {

  const dispatch = useDispatch();
  const { themeValue } = useThemeContext();

  const cardsList = useSelector(PostSelectors.getPostsList);
  const isPostListLoading = useSelector(PostSelectors.getPostsListLoading);

  useEffect(() => {
      dispatch(getPostsList());
  }, [])

  const totalPosts = useSelector(PostSelectors.getTotalPostsList);
  const [currentPage, setCurrentPage] = useState(1);

  const onNextReached = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div
      className={classNames(styles.container, {
        [styles.lightContainer]: themeValue === Theme.Light,
      })}
    >
      <CardList cardsList={cardsList} isLoading={isPostListLoading} />
      {cardsList.length < totalPosts && (
        <Button
          type={ButtonTypes.Secondary}
          title={"More"}
          onClick={onNextReached}
        />
      )}

    </div>
  );
};

export default Home;
