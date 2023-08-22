import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleFilm,
  getTrendPosts,
  PostSelectors,
  setSaveStatus,
} from "src/redux/reducers/postSlice";
import {
  BookmarkIcon,
  BookmarkIconSaved,
  GroupIcon,
  TrendsIcon,
} from "src/assets/icons";
import { Post } from "src/@types";
import { ButtonTypes } from "src/components/Button/Button";
import Loader from "src/components/Loader";
import Button from "src/components/Button";

import styles from "./SingleFilm.module.scss";
import classNames from "classnames";
import CardList from "src/components/CardList";
import Title from "src/components/Title";

const SingleFilm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const singleFilm = useSelector(PostSelectors.getSingleFilm);
  const isSinglePostLoading = useSelector(PostSelectors.getSinglePostLoading);

  const singleFilmGenres = singleFilm?.genres?.genres
    .map((genres) => genres.text)
    .join(" • ");
  const savedPosts = useSelector(PostSelectors.getSavedPosts);
  const savedIndex = savedPosts.findIndex((item) => item.id === id);

  const onSaveButtonClick = (card: Post) => () => {
    dispatch(setSaveStatus({ card }));
  };

  useEffect(() => {
    if (id) {
      dispatch(getSingleFilm(id));
    }
  }, [dispatch, id]);

  const trendFilms = useSelector(PostSelectors.getTrendPosts);
  useEffect(() => {
    dispatch(getTrendPosts());
  }, []);
  const isListLoading = useSelector(PostSelectors.getTrendPostsLoading);

  return singleFilm && !isSinglePostLoading ? (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <div className={styles.singleMoviePoster}>
            <img
              src={singleFilm.primaryImage.url}
              alt="#"
              className={styles.poster}
            />
          </div>
          <div className={styles.containerButtons}>
            <Button
              type={ButtonTypes.Primary}
              title={savedIndex > -1 ? <BookmarkIconSaved /> : <BookmarkIcon />}
              className={styles.icon}
              onClick={onSaveButtonClick(singleFilm)}
            />
            <Button
              type={ButtonTypes.Primary}
              title={<GroupIcon />}
              onClick={() => {}}
              className={styles.icon}
            />
          </div>
        </div>

        <div className={styles.singleMovieInfo}>
          <div className={styles.genres}>{singleFilmGenres}</div>
          <div className={styles.name}>{singleFilm.titleText.text}</div>

          <div className={styles.infoNumbers}>
            {singleFilm?.ratingsSummary?.aggregateRating ? (
              <div
                className={classNames(styles.rating, {
                  [styles.ratingOrange]:
                    singleFilm?.ratingsSummary?.aggregateRating <= 4,
                  [styles.ratingYellow]:
                    singleFilm?.ratingsSummary?.aggregateRating > 4 &&
                    singleFilm?.ratingsSummary?.aggregateRating < 7,
                  [styles.ratingGreen]:
                    singleFilm?.ratingsSummary?.aggregateRating >= 7,
                })}
              >
                {singleFilm?.ratingsSummary?.aggregateRating >= 7 ? (
                  <TrendsIcon />
                ) : (
                  ""
                )}
                {singleFilm?.ratingsSummary?.aggregateRating}
              </div>
            ) : (
              ""
            )}

            <div className={styles.ratingImdb}>IMDB 7,6</div>
            <div className={styles.time}>
              {singleFilm?.runtime
                ? singleFilm?.runtime?.seconds / 60 + " min"
                : null}
            </div>
          </div>
          <div className={styles.filmDescription}>
            {singleFilm.plot.plotText.plainText}
          </div>

          <div className={styles.descriptionInfo}>
            <ul className={styles.descriptionInfoLeft}>
              <li>Release Year</li>
              <li>RBoxOfficer</li>
              <li>Country</li>
              <li>Actors</li>
              <li>Director</li>
              <li>Writers</li>
            </ul>
            <ul className={styles.descriptionInfoRight}>
              <li>{singleFilm?.releaseYear.year}</li>
              <li>$381,409,310</li>
              <li>United Kingdom, United States</li>
              <li>Daniel Radcliffe, Emma Watson, Rupert Grint</li>
              <li>David Yates</li>
              <li>J.K. Rowling, Steve Kloves</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Title title={"Recommendations"}/>
        <div className={styles.recommendations}>
          <CardList cardsList={trendFilms} isLoading={isListLoading} />
        </div>

      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default SingleFilm;
