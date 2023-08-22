import React, { useEffect } from "react";
import { getTrendPosts, PostSelectors } from "src/redux/reducers/postSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Trends.module.scss";

import Card from "src/components/Card";
import Loader from "src/components/Loader";
const Trends = () => {
  const dispatch = useDispatch();
  const trendFilms = useSelector(PostSelectors.getTrendPosts);
  const isListLoading = useSelector(PostSelectors.getTrendPostsLoading);

  useEffect(() => {
    dispatch(getTrendPosts());
  }, []);

  return !isListLoading ? (
    <div className={styles.container}>
        {trendFilms.map((card) => {
          if (card.ratingsSummary?.aggregateRating >= 7) {
            return (
              <Card
                key={card.id}
                {...card}
              />
            );
          }
          })}
    </div>
  ): <Loader/>;
};

export default Trends;
