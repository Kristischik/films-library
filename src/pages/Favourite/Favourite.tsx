import React from "react";
import {PostSelectors} from "src/redux/reducers/postSlice";
import {useSelector} from "react-redux";
import Card from "src/components/Card";


const Favourite= () => {
  const favouritePosts = useSelector(PostSelectors.getSavedPosts);

  return (
    <div>
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