import React, { useState } from "react";

const Ticketbookingapp = () => {
  const [logState, setLogState] = useState("Login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const Greeting = (bool) => {
    if (bool) return "Welcome Back";
    else return "Please sign up.";
  };
  const handleButton = (loggedOrNot) => {
    if (loggedOrNot) {
      setIsLoggedIn(false);
      setLogState("Login");
    } else {
      setIsLoggedIn(true);
      setLogState("Logout");
    }
  };
  return (
    <div>
      <h1 style={{ paddingTop: "50px" }}>{Greeting(isLoggedIn)}</h1>
      <button onClick={() => handleButton(isLoggedIn)}>{logState}</button>
    </div>
  );
};

export default Ticketbookingapp;
