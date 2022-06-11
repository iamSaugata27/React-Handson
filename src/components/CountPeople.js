import React, { Component } from "react";

class CountPeople extends Component {
  constructor() {
    super();
    this.state = {
      entrycount: 0,
      exitcount: 0,
    };
  }

  updateEntry() {
    this.setState((prevState, props) => {
      return { entrycount: prevState.entrycount + 1 };
    });
  }

  updateExit() {
    this.setState((prevState, props) => {
      return { exitcount: prevState.exitcount + 1 };
    });
  }

  render() {
    return (
      <div style={{ paddingTop: "200px" }}>
        <button
          style={{ backgroundColor: "yellowgreen" }}
          onClick={() => this.updateEntry()}
        >
          Login
        </button>
        <span>
          {this.state.entrycount > 0
            ? `${this.state.entrycount} People Entered!!!`
            : ""}
        </span>
        <span style={{ paddingLeft: "200px" }}></span>
        <button
          style={{ backgroundColor: "yellowgreen" }}
          onClick={() => this.updateExit()}
        >
          Exit
        </button>
        <span>
          {this.state.exitcount > 0
            ? `${this.state.exitcount} People Left!!!`
            : ""}
        </span>
      </div>
    );
  }
}

export default CountPeople;
