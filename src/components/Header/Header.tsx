import React, {useMemo, useState, KeyboardEvent, ReactElement, FC, useEffect} from "react";

import { NavLink, Outlet, useNavigate } from "react-router-dom";

import {
  FavouritesIcon,
  HomeIcon,
  PixemaIcon,
  SearchIcon, SettingsIcon,
  TrendsIcon,
} from "src/assets/icons";

import styles from "./Header.module.scss";

import { RoutesList } from "src/pages/Router";
import Username from "src/components/Username";
import { useThemeContext } from "src/context/Theme";
import classNames from "classnames";
import {MenuButtonTypes, Theme} from "src/@types";
import Input from "src/components/Input";
// import {useDispatch, useSelector} from "react-redux";
// import {AuthSelectors, logoutUser} from "src/redux/reducers/authSlice";
// import {clearSearchedPosts} from "src/redux/reducers/postSlice";
import Button from "src/components/Button";
import { ButtonTypes } from "src/components/Button/Button";
import MenuButtonList from "src/components/MenuButtonList";

type MenuProps = {
  onClick?: () => void;
  active?: boolean;
};

const Header: FC<MenuProps> = (onClick, active) => {
  const { themeValue } = useThemeContext();
  // const dispatch = useDispatch()
  const isLoggedIn = true;
  // const isLoggedIn = useSelector(AuthSelectors.getLoggedIn)

  const [activeMenuButton, setActiveMenuButton] = useState(MenuButtonTypes.Home);
  const menuButtonList = useMemo(
    () => [
      { key: MenuButtonTypes.Home, title: "Home", icon: <HomeIcon/> },
      { key: MenuButtonTypes.Trends, title: "Trends", icon: <TrendsIcon/> },
      { key: MenuButtonTypes.Favourites, title: "Favourites", icon: <FavouritesIcon/> },
      { key: MenuButtonTypes.Settings, title: "Settings", icon: <SettingsIcon/> },
    ],
    []
  );


  const [isOpened, setOpened] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const navLinks = useMemo(
    () => [
      { path: RoutesList.Home, title: "Home" },
      ...(isLoggedIn ? [{ path: RoutesList.SignUp, title: "Add Post" }] : []),
    ],
    [isLoggedIn],
  );

  // const handleSearchOpened = () => {
  //   setSearch(!isSearch);
  //   if (isSearch && inputValue) {
  //     dispatch(clearSearchedPosts());
  //     navigate(`posts/${inputValue}`);
  //     setInputValue("");
  //   }
  // };


  const onMenuButtonClick = (menuButton: MenuButtonTypes) => () => {
    setActiveMenuButton(menuButton);
  };
  const onLoginButtonClick = () => {
    navigate(RoutesList.SignIn);
  };

  // const userInfo = useSelector(AuthSelectors.getUserInfo);
  //
  // const onLogout = () => {
  //   dispatch(logoutUser());
  // };

  // const onKeyDown = (
  //   event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   if (event.key === "Enter") {
  //     handleSearchOpened();
  //   }
  // };

  return (
    <div
      className={classNames(styles.container, {
        [styles.lightContainer]: themeValue === Theme.Light,
      })}
    >
      <div className={styles.header}>
        <div className={styles.searchContainer}>
          <div className={styles.pixema}>
            <PixemaIcon />
          </div>

          <Input
            placeholder="Search..."
            onChange={setInputValue}
            value={inputValue}
            className={styles.searchInput}
            // onKeyDown={onKeyDown}
            onKeyDown={() => {}}
          />
        </div>

        <div className={styles.searchButtonContainer}>
          <Button
            type={ButtonTypes.Primary}
            title={<SearchIcon />}
            // onClick={handleSearchOpened}
            onClick={() => {}}
            className={styles.searchButton}
          />
          {/*{isLoggedIn && userInfo ? <Username username = {userInfo.username} /> : <Button*/}
          {/*  type={ButtonTypes.Primary}*/}
          {/*  title={<UserIcon />}*/}
          {/*  onClick={onLoginButtonClick}*/}
          {/*  className={styles.userButton}*/}
          {/*/>}*/}
          <Username username={"Kristina"} />

          {/*<Button*/}
          {/*  type={ButtonTypes.Primary}*/}
          {/*  title={<UserIcon />}*/}
          {/*  onClick={onLoginButtonClick}*/}
          {/*  className={styles.userButton}*/}
          {/*/>*/}
        </div>
      </div>

      <div className={styles.mainContainer}>

        <MenuButtonList menuButtonList={menuButtonList} activeMenuButton={activeMenuButton} onMenuButtonClick={onMenuButtonClick}/>

        <div className={styles.infoContainer}>
          <Outlet />
        </div>

      </div>
      <div className={styles.footer}>©All rights reserved</div>
    </div>
  );
};

export default Header;
