import React, {useState} from "react";
import Button from "./components/Button";
import { ButtonTypes } from "./components/Button/Button";
import Input from "./components/Input";
import Tab from "./components/TabsList/Tab";
import TabsList from "./components/TabsList";
import { TabsTypes } from "./@types";
import Username from "./components/Username";
import {BookmarkIcon} from "./assets/icons";
import SignUp from "./pages/SignUp";

const App = () => {

  return (
    <div>
      <SignUp/>
    </div>
  );
};

export default App;

