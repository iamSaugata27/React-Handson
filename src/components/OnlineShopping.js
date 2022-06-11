import React, { Component } from "react";
import Cart from "./Cart";

export class OnlineShopping extends Component {
  render() {
    const CartInfo = [
      { itemname: "Laptop", price: 80000 },

      { itemname: "TV", price: 120000 },

      { itemname: "Washing Machine", price: 50000 },

      { itemname: "Mobile", price: 30000 },

      { itemname: "Fridge", price: 70000 },
    ];

    return (
      <div className="mydiv">
        <h1 style={{ color: "green" }}>Items Ordered :</h1>
        <table style={{ border: "1px solid black" }}>
          <tr>
            <th style={{ color: "green" }}>Name</th>
            <th style={{ color: "green" }}>Price</th>
          </tr>
          <Cart item={CartInfo} />
        </table>
      </div>
    );
  }
}

export default OnlineShopping;
