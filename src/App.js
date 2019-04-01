import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           Hello to the project.
          </p>
          <div style={{ background: "white", color: "black" }}>
            This is a box
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="App-link"
            href="https://education.github.com/git-cheat-sheet-education.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Git
          </a>
        </header>
      </div>
    );
  }
}

export default App;
