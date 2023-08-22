import React from "react";
import {PostSelectors} from "src/redux/reducers/postSlice";
import {useSelector} from "react-redux";
import Card from "src/components/Card";
import styles from "./Favourite.module.scss";


const Favourite= () => {
  const favouritePosts = useSelector(PostSelectors.getSavedPosts);

  return (
    <div className={styles.container}>
      {favouritePosts.map((el) => {
        return (
          <Card
            key={el.id}
            {...el}
          />
        );
      })}
    </div>
  );
};

export default Favourite;