import React, { FC, useMemo, useState } from "react";
import classNames from "classnames";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  ArrowDown,
  BookmarkIconSaved,
  HomeIcon,
  PixemaIcon,
  SearchIcon,
  SettingsIcon,
  TrendsIcon,
} from "src/assets/icons";

import { RoutesList } from "src/pages/Router";
import Username from "src/components/Username";
import { useThemeContext } from "src/context/Theme";
import { MenuButtonTypes, Theme } from "src/@types";
import Input from "src/components/Input";
import Button from "src/components/Button";
import { ButtonTypes } from "src/components/Button/Button";
import Filters from "src/components/Filters";

import styles from "./Header.module.scss";
type MenuProps = {
  onClick?: () => void;
  active?: boolean;
};

const Header: FC<MenuProps> = (onClick, active) => {
  const { themeValue } = useThemeContext();

  const [activeMenuButton, setActiveMenuButton] = useState(
    MenuButtonTypes.Home,
  );

  const onMenuButtonClick = (menuButton: MenuButtonTypes) => () => {
    setActiveMenuButton(menuButton);
  };

  const navLinks = useMemo(
    () => [
      {
        path: RoutesList.Home,
        key: MenuButtonTypes.Home,
        title: (
          <div
            className={classNames(styles.title, {
              [styles.active]: active,
            })}
          >
            Home
          </div>
        ),
        icon: (
          <div
            className={classNames(styles.icon, {
              [styles.active]: active,
            })}
          >
            <HomeIcon />
          </div>
        ),
      },
      {
        path: RoutesList.SignUp,
        key: MenuButtonTypes.Trends,
        title: (
          <div
            className={classNames(styles.title, {
              [styles.active]: active,
            })}
          >
            Trends
          </div>
        ),
        icon: (
          <div
            className={classNames(styles.icon, {
              [styles.active]: active,
            })}
          >
            <TrendsIcon />
          </div>
        ),
      },
      {
        path: RoutesList.Favourite,
        key: MenuButtonTypes.Favourites,
        title: (
          <div
            className={classNames(styles.title, {
              [styles.active]: active,
            })}
          >
            Favourites
          </div>
        ),
        icon: (
          <div
            className={classNames(styles.icon, {
              [styles.active]: active,
            })}
          >
            <BookmarkIconSaved />
          </div>
        ),
      },
      {
        path: RoutesList.Settings,
        key: MenuButtonTypes.Settings,
        title: (
          <div
            className={classNames(styles.title, {
              [styles.active]: active,
            })}
          >
            Settings
          </div>
        ),
        icon: (
          <div
            className={classNames(styles.icon, {
              [styles.active]: active,
            })}
          >
            <SettingsIcon />
          </div>
        ),
      },
    ],
    [],
  );

  const [isOpened, setOpened] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");

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
        <div className={styles.navLinkButtons}>
          {navLinks.map((link) => (
            <NavLink
              to={link.path}
              key={link.path}
              className={styles.navLinkButton}
            >
              {link.icon}
              {link.title}
            </NavLink>
          ))}
        </div>

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
