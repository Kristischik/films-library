import React, {FC, useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { RoutesList } from "src/pages/Router";
import InfiniteScroll from 'react-infinite-scroll-component';
import {PostsList, Theme} from "src/@types";
import { getSearchedFilms, PostSelectors } from "src/redux/reducers/postSlice";
import { useThemeContext } from "src/context/Theme";
import Title from "src/components/Title";
import Card from "src/components/Card";
import EmptyState from "src/components/EmptyState";
import styles from "./Search.module.scss";
import Loader from "src/components/Loader";
import {PER_PAGE} from "src/utils/constants";


const Search = () => {
  const { themeValue } = useThemeContext();
  // const { title } = useParams();
  const { search } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchedFilms = useSelector(PostSelectors.getSearchedFilms);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPosts = useSelector(PostSelectors.getTotalSearchedPosts);


  useEffect(() => {
    if (!search) {
      navigate(RoutesList.Home);
    } else {
      dispatch(getSearchedFilms(search));
    }
  }, [dispatch, navigate, search]);

  // useEffect(() => {
  //   if (!title) {
  //     navigate(RoutesList.Home);
  //   } else {
  //     const page = (currentPage - 1) * PER_PAGE;
  //     dispatch(getSearchedFilms({page, title}));
  //   }
  // }, [dispatch, navigate, currentPage]);
  //
  //
  // const onNextReached = () => {
  //   setCurrentPage(currentPage + 1);
  // };


  return (
    <div
      className={classNames(styles.searchContainer, {
        [styles.lightSearchContainer]: themeValue === Theme.Light,
      })}
    >
      <Title title={`Search results: "${search}"`} />
      <div className={styles.cardsContainer}>
        {searchedFilms.length ? (
          // <InfiniteScroll
          //   next={onNextReached}
          //   scrollThreshold={0.7}
          //   hasMore={searchedFilms.length < totalPosts}
          //   loader={<Loader />}
          //   dataLength={searchedFilms.length}
          //   scrollableTarget="scrollableDiv"
          // >
           <>
            {searchedFilms.map((post) => {
              return <Card {...post} />;
            })}
           </>
          // </InfiniteScroll>
        ) : (
          <EmptyState
            title={"Nothing was found..."}
            description={"Try another search request"}
          />
        )}
      </div>
    </div>
  );
};

export default Search;
