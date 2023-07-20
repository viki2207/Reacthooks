//rafce
import React, { useState } from "react";

const Usestate = () => {
  //define variable as a usestate
  //SET MEANS SET SOMETHING FOR next state
  //use state is  A top level of your component state
  //update your stae with the diffrent value
  const [counter, setcounter] = useState(0);
  const [inputValue, setinputValue] = useState("pedro");

  const increment = () => {
    setcounter(counter + 1);
  };
  let onChange = (event) => {
    const newValue = event.target.value;
    setinputValue(newValue);
  };
  return (
    <div>
      {counter}
      <button onClick={increment}>Increment</button>
      <input placeholder="enter something..." onChange={onChange}></input>
      {inputValue}
    </div>
  );
};

export default Usestate;
