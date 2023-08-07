import React, { FC } from "react";

import {MenuButtonListType, MenuButtonTypes} from "src/@types";
import MenuButton from "src/components/MenuButton";
import styles from "./MenuButtonList.module.scss";
type MenuButtonListProps = {
  menuButtonList: MenuButtonListType;
  activeMenuButton: MenuButtonTypes;
  onMenuButtonClick: (menuButton: MenuButtonTypes) => () => void;
};

const MenuButtonList: FC<MenuButtonListProps> = ({ menuButtonList, activeMenuButton,onMenuButtonClick }) => {
  return (
    <div className={styles.container}>
      {menuButtonList.map(({ key, title, icon}) => (
        <MenuButton
          key={key}
          title={title}
          icon={icon}
          onClick={onMenuButtonClick(key)} //() => (tab) => setTab(tab)
          active={activeMenuButton === key}
        />
      ))}
    </div>
  );
};

export default MenuButtonList;