import React from 'react';
import Button from "./components/Button";
import {ButtonTypes} from "./components/Button/Button";
import Input from "./components/Input";


const App = () => {
  return (
    <div><Button type={ButtonTypes.Primary} title={"Primary"} onClick={() => {}}/>
      <Button type={ButtonTypes.Secondary} title={"Secondary"} onClick={() => {}}/>
      <Input title={"Title"} placeholder={'Placeholder'} onChange={() => {}} value={""}/>
     </div>
  );
}

export default App;

