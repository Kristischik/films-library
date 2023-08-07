import React, { FC, ReactElement } from "react";
import classNames from "classnames";

import styles from "./MenuButton.module.scss";


type MenuButtonProps = {
  title: string,
  icon: ReactElement;
  onClick?: () => void;
  active?: boolean;
};

const MenuButton: FC<MenuButtonProps> = ({ title, onClick, icon, active }) => {

  return (
    <div
      onClick={onClick}
      className={classNames(styles.menuButton, {
        [styles.active]: active,
      })}
    >
      <div  className={classNames(styles.icon, {
        [styles.active]: active,
      })}>{icon}</div>
      <div  className={classNames(styles.title, {
        [styles.active]: active,
      })}> {title}</div>

    </div>
  );
};
export default MenuButton;