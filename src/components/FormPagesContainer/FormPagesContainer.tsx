import React, { FC, ReactElement } from "react";
import classNames from "classnames";

import Title from "../Title";
import Button from "../Button";

import { ButtonTypes } from "../Button/Button";
import { useThemeContext } from "src/context/Theme";
import { Theme } from "src/@types";

import styles from "./FormPagesContainer.module.scss";

type FormPagesContainerProps = {
  title: string;
  children: ReactElement | ReactElement[];
  btnTitle: string;
  onSubmit: () => void;
  additionalInfo?: ReactElement;
  isSubmitDisabled?: boolean;
};

const FormPagesContainer: FC<FormPagesContainerProps> = ({
  title,
  children,
  btnTitle,
  onSubmit,
  additionalInfo,
  isSubmitDisabled,
}) => {
  const { themeValue } = useThemeContext();

  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.formContainer, {
          [styles.lightContainer]: themeValue === Theme.Light,
        })}
      >
        <Title title={title} />
        <div className={styles.fieldsContainer}>{children}</div>
        <Button
          type={ButtonTypes.Primary}
          title={btnTitle}
          onClick={onSubmit}
          className={styles.button}
          disabled={isSubmitDisabled}
        />
        <div>{additionalInfo}</div>
      </div>
    </div>
  );
};

export default FormPagesContainer;
