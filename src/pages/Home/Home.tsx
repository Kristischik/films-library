import { useEffect} from "react";
import classNames from "classnames";
import {
  getPostsList,
  PostSelectors,
} from "src/redux/reducers/postSlice";
import { Theme } from "src/@types";
import { useThemeContext } from "src/context/Theme";
import { useDispatch, useSelector } from "react-redux";


import CardList from "src/components/CardList";

import styles from "./Home.module.scss";

const Home = () => {

  // const [isLoggedIn, setLoggedIn] = useState(false);
  // const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);

  // const [cardsList, setCardsList] = useState<PostsList>([]);

  const dispatch = useDispatch();
  // const cardsList = useSelector(PostSelectors.getPostsList)


  const cardsList = useSelector(PostSelectors.getPostsList);


  useEffect(() => {
      dispatch(getPostsList());
  }, [])


  const { themeValue } = useThemeContext();

  return (
    <div
      className={classNames(styles.container, {
        [styles.darkContainer]: themeValue === Theme.Dark,
      })}
    >
      <CardList cardsList={cardsList} />

    </div>
  );
};

export default Home;
