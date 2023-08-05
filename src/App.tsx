import React, { useState } from "react";

import { ThemeProvider } from "./context/Theme";
import { Theme } from "./@types";
import ThemeSwitcher from "./components/ThemeSwitcher";

import SignUp from "./pages/SignUp";

const App = () => {
  const [themeValue, setThemeValue] = useState<Theme>(Theme.Dark);
  const onChangeTheme = (value: Theme) => () => {
    setThemeValue(value)
  };

  return (
    <div>
      <ThemeProvider themeValue={themeValue} onChangeTheme={onChangeTheme}>
       <ThemeSwitcher/>
        <SignUp/>
      </ThemeProvider>
    </div>
  );
};

export default App;

