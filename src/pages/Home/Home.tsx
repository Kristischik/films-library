import React, {useEffect, useState} from "react";
import classNames from "classnames";
import {
  getPostsList,
  PostSelectors,
} from "src/redux/reducers/postSlice";
import {Theme} from "src/@types";
import { useThemeContext } from "src/context/Theme";
import { useDispatch, useSelector } from "react-redux";
import {ButtonTypes} from "src/components/Button/Button";
import CardList from "src/components/CardList";
import Button from "src/components/Button";

import styles from "./Home.module.scss";
import {PER_PAGE} from "src/utils/constants";

const Home = () => {

  const dispatch = useDispatch();
  const { themeValue } = useThemeContext();

  const cardsList = useSelector(PostSelectors.getPostsList);
  const isPostListLoading = useSelector(PostSelectors.getPostsListLoading);

  const totalPosts = useSelector(PostSelectors.getTotalPostsList);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const page = (currentPage - 1) * PER_PAGE;
    dispatch(getPostsList({page}));
  }, [currentPage])


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
