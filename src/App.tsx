import React from 'react';
import Button from "./components/Button";
import {ButtonTypes} from "./components/Button/Button";


const App = () => {
  return (
    <div><Button type={ButtonTypes.Primary} title={"Primary"} onClick={() => {}}/>
      <Button type={ButtonTypes.Secondary} title={"Secondary"} onClick={() => {}}/>
     </div>
  );
}

export default App;

