import React, { useState } from "react";

const CurrencyConvertor = () => {
  const [val, setval] = useState("");
  const handleSubmit = (val) => {
    const convertval = parseInt(val) * 82.18;
    alert(`Converting to Euro Ammount is ${convertval.toFixed(2)}`);
  };

  return (
    <div>
      <h2 style={{ color: "green", paddingTop: "10px" }}>
        Currency Converter!!!
      </h2>
      <label style={{ paddingTop: "4px" }}>Amount: </label>
      <input
        placeholder="Enter Currency Value"
        style={{ paddingTop: "4px" }}
        onChange={(e) => setval(e.target.value)}
      />
      <br />
      <label>Currency: </label>
      <input value="Euro" readOnly />
      <br />
      <div style={{ paddingLeft: "100px", paddingTop: "2px" }}>
        <button onClick={() => handleSubmit(val)}>Submit</button>
      </div>
    </div>
  );
};

export default CurrencyConvertor;
