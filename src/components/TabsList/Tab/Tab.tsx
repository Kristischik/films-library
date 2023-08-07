import React, { FC, ReactElement } from "react";
import classNames from "classnames";

import styles from "./Tab.module.scss";
// import {useThemeContext} from "src/context/Theme";
// import {Theme} from "src/@types";


type TabsProps = {
  title: string | ReactElement;
  onClick?: () => void;
  active?: boolean;
};

const Tab: FC<TabsProps> = ({ title, onClick, active }) => {

  // const { themeValue } = useThemeContext();

  return (
    <div
      onClick={onClick}
      className={classNames(styles.tab, {
        [styles.active]: active,
        // [styles.darkTab]: themeValue === Theme.Dark,
      })}
    >
      {title}
    </div>
  );
};
export default Tab;