import React, { FC } from "react";

import {PostsList} from "src/@types";
import Card from "src/components/Card";

import styles from "./CardList.module.scss";
import Loader from "src/components/Loader";
import EmptyState from "src/components/EmptyState";

type CardListProps = {
  cardsList: PostsList;
  isLoading: boolean;
};

const CardList: FC<CardListProps> = ({ cardsList, isLoading }) => {

  if (isLoading) {
    return  <Loader />
  }
  return cardsList.length ?  (

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
  ): <EmptyState title={"There is no posts"} description={'Create a new one!'}/>
};

export default CardList;
