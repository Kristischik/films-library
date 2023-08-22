import React, {FC} from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { Post, Theme } from "src/@types";
import { BookmarkIcon, BookmarkIconSaved, TrendsIcon } from "src/assets/icons";
import { useSelector} from "react-redux";
import {PostSelectors} from "src/redux/reducers/postSlice";
import { useThemeContext } from "src/context/Theme";

import styles from "./Card.module.scss";
const Card: FC<Post> = ({
  id,
  titleText,
  primaryImage,
  onSaveClick,
  genres,
  ratingsSummary,
}) => {
  const { themeValue } = useThemeContext();
  const navigate = useNavigate();

  const savedPosts = useSelector(PostSelectors.getSavedPosts);
  const savedIndex = savedPosts.findIndex((item) => item.id === id);

  const onTitleClick = () => {
    navigate(`/film/${id}/`);
  };

  const filmGenres = genres?.genres
    .map((genres) => genres.text)
    .join(" • ");

  return (
    <div
      className={classNames(styles.container, {
        [styles.lightContainer]: themeValue === Theme.Light,
      })}
    >
      <div className={styles.poster}>
        <img src={primaryImage?.url} alt="#" />

        <div className={styles.iconsContainer}>
          <div>
            {ratingsSummary?.aggregateRating ? (
              <div
                className={classNames(styles.rating, {
                  [styles.ratingOrange]:
                  ratingsSummary?.aggregateRating <= 4,
                  [styles.ratingYellow]:
                  ratingsSummary?.aggregateRating > 4 &&
                  ratingsSummary?.aggregateRating < 7,
                  [styles.ratingGreen]:
                 ratingsSummary?.aggregateRating >= 7,
                })}
              >
                {ratingsSummary?.aggregateRating >= 7 ? (
                  <TrendsIcon />
                ) : (
                  ""
                )}
                {ratingsSummary?.aggregateRating}
              </div>
            ) : (
              ""
            )}
          </div>

          <div className={styles.iconBookmark}>
            <div onClick={onSaveClick}>
              {savedIndex > -1 ? <BookmarkIconSaved /> : <BookmarkIcon />}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.text} onClick={onTitleClick}>
        {titleText.text}
      </div>
      <div className={styles.genre}>{filmGenres}</div>
    </div>
  );
};

export default Card;
