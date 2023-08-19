import React from "react";
import classNames from "classnames";

import { useThemeContext } from "src/context/Theme";
import { MoonIcon, SunIcon } from "src/assets/icons";
import { Theme } from "src/@types";

import styles from "./ThemeSwitcher.module.scss";

const ThemeSwitcher = () => {
  const { themeValue, onChangeTheme } = useThemeContext();

  return (
    <div className={classNames(styles.containerSwitch, {
      [styles.lightContainer]: themeValue === Theme.Light,
    })}>
      <div className={styles.title}>Color mode</div>
      <div className={styles.container}>
        {themeValue === Theme.Dark &&
          <div className={styles.textContainer}>
            <span className={styles.usedTheme}>Dark</span>
            <span className={styles.themeDescription}>Use dark theme</span>
          </div>
        }
        {themeValue === Theme.Light &&
            <div className={styles.textContainer}>
                <span className={styles.usedTheme}>Light</span>
                <span className={styles.themeDescription}>Use light theme</span>
            </div>
        }
        <div className={styles.buttonContainer}>
          <div
            className={classNames(styles.button, {
              [styles.activeButton]: themeValue === Theme.Light,
            })}
            onClick={onChangeTheme(Theme.Light)}
          >
            <SunIcon />
          </div>
          <div
            className={classNames(styles.button, {
              [styles.activeButton]: themeValue === Theme.Dark,
            })}
            onClick={onChangeTheme(Theme.Dark)}
          >
            <MoonIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
