import React, { FC } from "react";
import styles from "./Settings.module.scss";
import classNames from "classnames";
import Title from "src/components/Title";
import Input from "src/components/Input";
import ThemeSwitcher from "src/components/ThemeSwitcher";
import Button from "src/components/Button";
import { ButtonTypes } from "src/components/Button/Button";
import {UsernameProps} from "src/components/Username/Username";
import {useThemeContext} from "src/context/Theme";
import {Theme} from "src/@types";

type SettingsProps = {
  name?: UsernameProps;
  email?: string;
};

const Settings: FC<SettingsProps> = ({name, email}) => {

  const { themeValue } = useThemeContext();

  return (
    <div className={classNames(styles.container, {
      [styles.lightContainer]: themeValue === Theme.Light,
    })}>
      <Title title={"Profile"} />
      <div className={styles.personContainer}>
        <Input title={'Name'} placeholder={""} onChange={() => {}} value={''} />
        <Input title={"Email"} placeholder={""} onChange={() => {}} value={""} />
      </div>
      <Title title={"Password"} />
      <div className={styles.passwordContainer}>
        <Input title={"Password"} placeholder={"Your password"} onChange={() => {}} value={""} />
        <div className={styles.passwordConfim}>
          <Input title={"New password"} placeholder={"New password"} onChange={() => {}} value={""} />
          <Input
            title={"Confirm password"}
            placeholder={"Confirm password"}
            onChange={() => {}}
            value={""}
          />
        </div>
      </div>
      <ThemeSwitcher />
      <div className={styles.buttonContainer}>
        <Button
          type={ButtonTypes.Secondary}
          title={"Cancel"}
          onClick={() => {}}
        />
        <Button type={ButtonTypes.Primary} title={"Save"} onClick={() => {}} />
      </div>
    </div>
  );
};

export default Settings;
