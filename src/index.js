import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = { body: "" };
  }

  componentDidMount() {
    fetch("https://3xxz646ovq.sse.codesandbox.io/ahoj")
      .then(data => data.json())
      .then(data => this.setState({ body: data }))
      .catch(e => console.log(e));
  }

  logger() {
    console.log(this.state.body);
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.logger.bind(this)}>Click me</button>
        <p>{this.state.body}</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
