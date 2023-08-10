import React, { FC } from "react";
import classNames from "classnames";
import styles from "./Card.module.scss";

type CardProps = {
  id?: number,
  primaryImage?:{url: string} ,
  titleText?: {text: string},
  releaseYear?: {year: number},
};

const Card: FC<CardProps> = ({titleText, primaryImage}) => {
  return  (
    <div className={styles.container}>
      <div className={styles.poster}>
        <img  src={primaryImage?.url} alt="#" />
      </div>
      <div className={styles.text}>{titleText?.text}</div>
    </div>
  )
};

export default Card;
