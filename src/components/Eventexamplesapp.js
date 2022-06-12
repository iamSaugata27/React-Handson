import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

const Eventexamplesapp = () => {
  const [num, setNum] = useState(0);
  const incrementCount = () => {
    setNum(num + 1);
    alert("Hello! Member!");
  };
  const decrementCount = () => setNum(num - 1);
  return (
    <div style={{ textAlign: "left", paddingLeft: "10px", paddingTop: "20px" }}>
      {num}
      <br />
      <br />
      <button onClick={incrementCount}>Increment</button>
      <br />
      <button onClick={decrementCount}>Decrement</button>
      <br />
      <button onClick={() => alert("Welcome")}>Say Welcome</button>
      <br />
      <button onClick={() => alert("I was clicked")}>Click On Me</button>
      <CurrencyConvertor />
    </div>
  );
};

export default Eventexamplesapp;
