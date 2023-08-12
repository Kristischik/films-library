import React, { FC, useMemo, useState } from "react";

import { Outlet, useNavigate } from "react-router-dom";

import {
  ArrowDown,
  CloseIcon,
  FavouritesIcon,
  HomeIcon,
  PixemaIcon,
  SearchIcon,
  SettingsIcon,
  TrendsIcon,
} from "src/assets/icons";

import styles from "./Header.module.scss";

import { RoutesList } from "src/pages/Router";
import Username from "src/components/Username";
import { useThemeContext } from "src/context/Theme";
import classNames from "classnames";
import { MenuButtonTypes, Theme } from "src/@types";
import Input from "src/components/Input";
// import {useDispatch, useSelector} from "react-redux";
// import {AuthSelectors, logoutUser} from "src/redux/reducers/authSlice";
// import {clearSearchedPosts} from "src/redux/reducers/postSlice";
import Button from "src/components/Button";
import { ButtonTypes } from "src/components/Button/Button";
import MenuButtonList from "src/components/MenuButtonList";
import Filters from "src/components/Filters";
import home from "src/pages/Home";

type MenuProps = {
  onClick?: () => void;
  active?: boolean;
};

const Header: FC<MenuProps> = (onClick, active) => {
  const navigate = useNavigate();
  const { themeValue } = useThemeContext();
  // const dispatch = useDispatch()
  const isLoggedIn = true;


  const [activeMenuButton, setActiveMenuButton] = useState(
    MenuButtonTypes.Home,
  );

  // const onHomeClick = () => {
  //   navigate(RoutesList.Home);
  // };
  //
  // const onSettingsClick = () => {
  //   navigate(RoutesList.Settings);
  // };
  const onMenuButtonClick = (menuButton: MenuButtonTypes) => () => {
    setActiveMenuButton(menuButton);
  };
  const menuSwitcher = () => {
    switch (activeMenuButton) {
      case MenuButtonTypes.Home:
        return navigate(RoutesList.Home);
      case MenuButtonTypes.Settings:
        return navigate(RoutesList.Settings);
      default:
        return navigate(RoutesList.Home);
    }
  };


  const menuButtonList = useMemo(
    () => [
      {
        key: MenuButtonTypes.Home,
        title: "Home",
        icon: <HomeIcon />,
        onClick: {menuSwitcher},
      },
      { key: MenuButtonTypes.Trends, title: "Trends", icon: <TrendsIcon /> },
      {
        key: MenuButtonTypes.Favourites,
        title: "Favourites",
        icon: <FavouritesIcon />,
      },
      {
        key: MenuButtonTypes.Settings,
        title: "Settings",
        icon: <SettingsIcon />,
        onClick: {menuSwitcher},
      },
    ],
    [],
  );

  const [isOpened, setOpened] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");



  const navLinks = useMemo(
    () => [
      { path: RoutesList.Home, title: "Home" },
      ...(isLoggedIn ? [{ path: RoutesList.SignUp, title: "Add Post" }] : []),
    ],
    [isLoggedIn],
  );

  const handleFiltersOpened = () => {
    setOpened(!isOpened);
  };

  // const handleSearchOpened = () => {
  //   setSearch(!isSearch);
  //   if (isSearch && inputValue) {
  //     dispatch(clearSearchedPosts());
  //     navigate(`posts/${inputValue}`);
  //     setInputValue("");
  //   }
  // };


  const onLoginButtonClick = () => {
    navigate(RoutesList.SignIn);
  };




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

          <Username username={"Kristina"} />

          <Button
            type={ButtonTypes.Primary}
            title={<ArrowDown />}
            onClick={handleFiltersOpened}
            className={styles.filtersButton}
          />


        </div>
      </div>

      <div className={styles.mainContainer}>
        <MenuButtonList
          menuButtonList={menuButtonList}
          activeMenuButton={activeMenuButton}
          onMenuButtonClick={onMenuButtonClick}
        />

        <div className={styles.infoContainer}>
          <Outlet />
        </div>
      </div>
      <div className={styles.footer}>©All rights reserved</div>

      {isOpened && <Filters onClick={() => {}} onSubmit={() => {}} />}
    </div>
  );
};

export default Header;
