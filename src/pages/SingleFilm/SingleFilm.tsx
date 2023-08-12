import React, {useEffect} from "react";

import styles from "./SingleFilm.module.scss";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getSingleFilm, PostSelectors} from "src/redux/reducers/postSlice";
import Loader from "src/components/Loader";



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


  return singleFilm && !isSinglePostLoading ?(
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <div className={styles.singleMoviePoster}>
          <img src={singleFilm.primaryImage.url} alt='#' className={styles.poster} />
        </div>
      </div>

      <div className={styles.singleMovieInfo}>
        <div className={styles.name}>{singleFilm.titleText.text}</div>
        <div className={styles.descriptionInfo}>
          <ul className={styles.descriptionInfoLeft}>
            <li>Release Year</li>
          </ul>
          <ul className={styles.descriptionInfoRight}>
            <li>{singleFilm?.releaseYear.year}</li>
          </ul>
        </div>
      </div>

    </div>
  ) : <Loader/>;
};

export default SingleFilm;
