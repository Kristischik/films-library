import React, { useState } from "react";
import Router from "src/pages/Router";

import { ThemeProvider } from "./context/Theme";
import {useDispatch, useSelector} from "react-redux";
import { Theme } from "./@types";
import {setThemeValue, ThemeSelectors} from "src/redux/reducers/themeSlice";

const App = () => {

  const dispatch = useDispatch();

  const themeValue = useSelector(ThemeSelectors.getThemeValue);
  const onChangeTheme = (value: Theme) => () => {
    dispatch(setThemeValue(value)); // то, что швыряет в редакс данные
  };

  return (
    <ThemeProvider themeValue={themeValue} onChangeTheme={onChangeTheme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;

