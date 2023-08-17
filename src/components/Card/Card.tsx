import React, { FC } from "react";

import { useNavigate } from "react-router-dom";
import { Post } from "src/@types";

import styles from "./Card.module.scss";
import {BookmarkIcon, BookmarkIconSaved} from "src/assets/icons";
import {useSelector} from "react-redux";
import {PostSelectors} from "src/redux/reducers/postSlice";

const Card: FC<Post> = ({ id, titleText, primaryImage , onSaveClick}) => {

  const navigate = useNavigate();

  const savedPosts = useSelector(PostSelectors.getSavedPosts);
  const savedIndex = savedPosts.findIndex((item) => item.id === id);


  const onTitleClick = () => {
    navigate(`/film/${id}/`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.poster}>
        <img src={primaryImage?.url} alt="#" />
        <div className={styles.iconsContainer}>
          <div className={styles.iconRating}>7,8</div>
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
    </div>
  );
};

export default Card;
