import React, { FC } from "react";
import styles from "./Username.module.scss";
import {useThemeContext} from "src/context/Theme";
import classNames from "classnames";
import {Theme} from "src/@types";

export type UsernameProps = {
  username: string;
};

const Username: FC<UsernameProps> = ({ username }) => {
  const { themeValue } = useThemeContext();

  if (!username) {
    return null;
  }
  return (
    <div className={classNames(styles.container, {
      [styles.lightContainer]: themeValue === Theme.Light,
    })}>
      <div className={styles.initials}>{username[0]}</div>
      <div className={styles.username}>{username}</div>
    </div>
  );
};

export default Username;