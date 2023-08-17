import React, {FC, useState} from "react";

import {Post, PostsList} from "src/@types";
import Card from "src/components/Card";

import styles from "./CardList.module.scss";
import Loader from "src/components/Loader";
import EmptyState from "src/components/EmptyState";
import Button from "src/components/Button";
import {ButtonTypes} from "src/components/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {PostSelectors, setSaveStatus} from "src/redux/reducers/postSlice";

type CardListProps = {
  cardsList: PostsList;
  isLoading: boolean;
};

const CardList: FC<CardListProps> = ({ cardsList, isLoading }) => {
  const dispatch = useDispatch();

  const totalPosts = useSelector(PostSelectors.getTotalPostsList);
  const [currentPage, setCurrentPage] = useState(1);

  const onNextReached = () => {
    setCurrentPage(currentPage + 1);
  };

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
          {cardsList.length < totalPosts && (
            <Button
              type={ButtonTypes.Secondary}
              title={"More"}
              onClick={onNextReached}
            />
          )}
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
