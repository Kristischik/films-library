import React, { useEffect } from "react";

import styles from "./SingleFilm.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getSingleFilm, PostSelectors} from "src/redux/reducers/postSlice";
import Loader from "src/components/Loader";
import Button from "src/components/Button";
import { ButtonTypes } from "src/components/Button/Button";
import {BookmarkIcon, GroupIcon} from "src/assets/icons";


const SingleFilm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const singleFilm = useSelector(PostSelectors.getSingleFilm);
  const isSinglePostLoading = useSelector(PostSelectors.getSinglePostLoading);


  useEffect(() => {
    if (id) {
      dispatch(getSingleFilm(id));
    }
  }, [dispatch, id]);

  return singleFilm && !isSinglePostLoading ? (
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
            title={<BookmarkIcon/>}
            className={styles.icon}
            onClick={()=>{}}
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
        <div className={styles.genres}>Animation</div>
        <div className={styles.name}>{singleFilm.titleText.text}</div>

        <div className={styles.infoNumbers}>
          <div className={styles.rating}>{singleFilm.ratingsSummary.aggregateRating}</div>
          <div  className={styles.ratingImdb}>IMDB 7,6</div>
          <div className={styles.time}>130 min</div>
        </div>
        <div className={styles.filmDescription}>{singleFilm.plot.plotText.plainText}</div>


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
  ) : (
    <Loader />
  );
};

export default SingleFilm;
