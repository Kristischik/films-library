import React, {useState} from "react";
import Button from "./components/Button";
import { ButtonTypes } from "./components/Button/Button";
import Input from "./components/Input";
import Tab from "./components/TabsList/Tab";
import TabsList from "./components/TabsList";
import { TabsTypes } from "./@types";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const onChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <div>
      <Button type={ButtonTypes.Primary} title={"Primary"} onClick={() => {}} />
      <Button
        type={ButtonTypes.Secondary}
        title={"Secondary"}
        onClick={() => {}}
      />
      <Input
        // disabled={true}
        title={"Title"}
        placeholder={"Placeholder"}
        onChange={onChange}
        value={inputValue}
      />
      <Tab title={"Title"} />

    </div>
  );
};

export default App;

