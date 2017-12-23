import React, { Component } from 'react';
import './App.css';
import Board from '../Components/Board'
import Nav from '../Components/Navbar'

class App extends Component {
  render() {
    return (
      <div id='root'>
        <Nav></Nav>
        <Board count={10}>
        </Board>
      </div>
    );
  }
}

export default App;
