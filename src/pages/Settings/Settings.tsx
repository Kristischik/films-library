import React, { FC } from "react";
import styles from "./Settings.module.scss";
import Title from "src/components/Title";
import Input from "src/components/Input";
import ThemeSwitcher from "src/components/ThemeSwitcher";
import Button from "src/components/Button";
import { ButtonTypes } from "src/components/Button/Button";
import username from "src/components/Username";
import Username from "src/components/Username";
import {UsernameProps} from "src/components/Username/Username";

type SettingsProps = {
  name?: UsernameProps;
  email?: string;
};

const Settings: FC<SettingsProps> = ({name, email}) => {
  return (
    <div className={styles.container}>
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
