import React from "react";

const element = "Office Space";
const jsxatt = (
  <img
    src="https://img.etimg.com/thumb/msid-91945253,width-1200,height-900/industry/services/property-/-cstruction/tech-firm-tekion-leases-over-one-lakh-sqft-office-space-in-bengaluru-in-expansion-bid.jpg"
    width="25%"
    height="25%"
    alt="Office Space"
  />
);
const itemName = { Name: "DBS", Rent: 50000, address: "Chennai" };

const Officespacerentalapp = () => {
  let color = "";
  if (itemName.Rent <= 60000) color = "red";
  else color = "green";
  return (
    <div>
      <h1>{element}, at Affordable Range</h1>
      {jsxatt}
      <h1>Name: {itemName.Name}</h1>
      <h3 style={{ color: color }}>Rent: Rs. {itemName.Rent}</h3>
      <h3>Address: {itemName.address}</h3>
    </div>
  );
};

export default Officespacerentalapp;
