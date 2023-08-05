import React, { FC } from "react";
import classNames from "classnames";

import { useThemeContext } from "../../context/Theme";
import { Theme } from "../../@types";

import styles from "./Title.module.scss";

type TitleProps = {
  title: string;
  className?: string;
};

const Title: FC<TitleProps> = ({ title, className }) => {
  const { themeValue } = useThemeContext();

  return (
    <div
      className={classNames(styles.title, className, {
        [styles.lightTitle]: themeValue === Theme.Light,
      })}
    >
      {title}
    </div>
  );
};
export default Title;
