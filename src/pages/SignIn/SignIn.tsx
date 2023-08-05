import React, { useState } from "react";
import classNames from "classnames";

// import {useThemeContext} from "src/context/Theme";
// import {Theme} from "src/@types";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import {signInUser} from "src/redux/reducers/authSlice";
// import {RoutesList} from "src/pages/Router";

import FormPagesContainer from "../../components/FormPagesContainer";
import Input from "../../components/Input";

import styles from "./SignIn.module.scss";


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const { themeValue } = useThemeContext();
  //
  // const dispatch = useDispatch ()
  // const navigate = useNavigate ()

  // const onSubmit = () => {
  //   dispatch(signInUser({data: {email, password}, callback: () => navigate(RoutesList.Home)}))
  // }
  //
  // const onReset = () => {
  //   navigate(RoutesList.ResetPassword)
  // }

  const onSubmit = () => {
    const data = {
      email,
      password,
    };
  };


  return (
    <FormPagesContainer
      title={"Sign In"}
      btnTitle={"Sign In"}
      onSubmit={onSubmit}
      additionalInfo={
        <div className={styles.additionalInfo}>
          {"Don’t have an account?"}
          <span className={styles.signUp}>Sign Up</span>
        </div>
      }
    >

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
      <div  className={classNames(styles.forgotPassword,
      //   {
      //   [styles.darkForgotPassword]: themeValue === Theme.Dark,
      // }
      )}
            // onClick={onReset}
      >
        {"Forgot password?"}
      </div>
    </FormPagesContainer>
  );
};

export default SignIn;