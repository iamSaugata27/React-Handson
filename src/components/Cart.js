import React, { Component } from "react";

class Cart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.item.map((item) => {
      return (
        <tr>
          <td style={{ textAlign: "center", color: "blue" }}>
            {item.itemname}
          </td>
          <td style={{ textAlign: "center", color: "blue" }}>{item.price}</td>
        </tr>
      );
    });
  }
}

export default Cart;
