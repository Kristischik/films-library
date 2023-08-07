import React, { FC } from "react";
import classNames from "classnames";
import styles from "./Card.module.scss";

type CardProps = {
  id?: number,
  name: string,
  description?: string,
  poster: string,
  release_date?: string,
  season_number?: number,
  episode_number?: number,
  year?: number,
  popularity?: number,
  rating?: number,
  vote_count?: number,
  genres?: [],
  credits?: [],
};

const Card: FC<CardProps> = ({name, poster}) => {
  return  (
    <div className={styles.container}>
      <div className={styles.poster}>
        <img  src={poster} alt="#" />
      </div>
      <div className={styles.text}>{name}</div>
    </div>
  )
};

export default Card;
