import React, { useState } from "react";
import classNames from "classnames";

// import { useDispatch } from "react-redux";
// import { signUpUser } from "src/redux/reducers/authSlice";

import FormPagesContainer from "src/components/FormPagesContainer";
import Input from "src/components/Input";

import styles from "./SignUp.module.scss";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const dispatch = useDispatch();

  const onSubmit = () => {
    const data = {
      username: name,
      email,
      password,
    };
    // dispatch(signUpUser({ data, callback: () => {} }));
  };

  return (
    <FormPagesContainer
      title={"Sign Up"}
      btnTitle={"Sign Up"}
      onSubmit={onSubmit}
      additionalInfo={
        <div className={styles.additionalInfo}>
          {"Already have an account?"}
          <span className={styles.signIn}>Sign In</span>
        </div>
      }
    >
      <Input
        title={"Name"}
        placeholder={"Your name"}
        onChange={setName}
        value={name}
      />
      <Input
        title={"Email"}
        placeholder={"Your email"}
        onChange={setEmail}
        value={email}
      />
      <Input
        title={"Password"}
        placeholder={"Your password"}
        onChange={setPassword}
        value={password}
      />
      <Input
        title={"Confirm Password"}
        placeholder={"Confirm password"}
        onChange={setConfirmPassword}
        value={confirmPassword}
      />
    </FormPagesContainer>
  );
};

export default SignUp;
