import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

//Functional Component
const Intro = props => (
  <p className="App-intro">Our first functional Component.</p>
);

//Class based component
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro />
      </div>
    );
  }
}

export default App;
