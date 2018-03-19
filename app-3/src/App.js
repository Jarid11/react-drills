import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ["ice cream", "grapes", "bananas", "milk", "bread"],
      userInput: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(val) {
    this.setState({
      userInput: val
    });
  }

  render() {
    let filteredList = this.state.list
      .filter(element => element.includes(this.state.userInput))
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });
    console.log(filteredList);
    return (
      <div className="App">
        <input type="text" onChange={e => this.handleInput(e.target.value)} />
        {filteredList}
      </div>
    );
  }
}

export default App;
