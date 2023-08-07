import React, { ChangeEvent, KeyboardEvent, FC } from "react";
import classNames from "classnames";

import { useThemeContext } from "src/context/Theme";
import { Theme } from "src/@types";

import styles from "./Input.module.scss";

type InputProps = {
  title?: string;
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
  disabled?: boolean;
  errorText?: string;
  className?: string;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
};

const Input: FC<InputProps> = ({
  title,
  errorText,
  placeholder,
  onChange,
  disabled,
  value,
  onKeyDown,
}) => {

  const { themeValue } = useThemeContext();
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const inputProps = {
    onChange: onInputChange,
    value,
    placeholder,
    className: classNames(styles.input, {
      [styles.disabled]: disabled,
      [styles.errorInput]: errorText,
    }),
    onKeyDown,
  };

  return (
    <div
      className={classNames(styles.container, {
        [styles.lightContainer]: themeValue === Theme.Light,
      })}
    >
      <div className={styles.title}>{title}</div>
      <input {...inputProps} />
      {errorText && <div className={styles.errorText}>{errorText}</div>}
    </div>
  );
};

export default Input;
