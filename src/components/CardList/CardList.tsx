import React, { FC } from "react";

import {PostsList} from "src/@types";
import Card from "src/components/Card";

import styles from "./CardList.module.scss";

type CardListProps = {
  cardsList: PostsList;
  // isLoading: boolean;
};

const CardList: FC<CardListProps> = ({ cardsList }) => {


  return  (
    <div>
      <div className={styles.container}>
        {cardsList.map((el) => {
            return (
              <Card
                key={el.id}
                {...el}
              />
            );
        })}
      </div>

    </div>
  )
};

export default CardList;
