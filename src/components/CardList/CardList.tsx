import React, {FC} from "react";

import {Post, PostsList} from "src/@types";
import Card from "src/components/Card";
import styles from "./CardList.module.scss";
import Loader from "src/components/Loader";
import EmptyState from "src/components/EmptyState";
import {useDispatch} from "react-redux";
import {setSaveStatus} from "src/redux/reducers/postSlice";

type CardListProps = {
  cardsList: PostsList;
  isLoading: boolean;
};

const CardList: FC<CardListProps> = ({ cardsList, isLoading }) => {
  const dispatch = useDispatch();


  const onSaveClick = (card: Post) => ()  => {
    dispatch(setSaveStatus({card}))
  }

  if (isLoading) {
    return <Loader/>
  }

  return (
    <div>
      {cardsList.length ? (
        <div className={styles.container}>
          {cardsList.map((el) => {
            return (
              <Card
                key={el.id}
                {...el}
                onSaveClick = {onSaveClick(el)}
              />
            );
          })}
        </div>

      ) : (
        <EmptyState
          title={"Nothing was found..."}
          description={"Create new card"}
        />
      )}
    </div>
  );
};

export default CardList;
