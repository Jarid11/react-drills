import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div>
        <Image photo="https://static.boredpanda.com/blog/wp-content/uploads/2015/04/bulldog-puppy-cute-dog-photography-36__605.jpg" />
      </div>
    );
  }
}

export default App;
