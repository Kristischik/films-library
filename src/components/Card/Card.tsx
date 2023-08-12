import React, { FC } from "react";

import {useNavigate} from "react-router-dom";
import {Post} from "src/@types";

import styles from "./Card.module.scss";


const Card: FC<Post> = ({id,titleText,primaryImage}) => {

  const navigate = useNavigate();

  const onTitleClick = () => {
    navigate(`/film/${id}/`);
  };

  return  (
    <div className={styles.container}>
      <div className={styles.poster}>
        <img  src={primaryImage?.url} alt="#" />
      </div>
      <div className={styles.text}  onClick={onTitleClick}>{titleText.text}</div>
    </div>
  )
};

export default Card;
