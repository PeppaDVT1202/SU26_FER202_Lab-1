import React, { Component } from "react";
import HelloWorld from "./HelloWorld.js";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>My React App!</h1>
        <HelloWorld />
      </div>
    );
  }
}

export default App;
