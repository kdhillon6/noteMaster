import React, { Component } from 'react';

import Board from '../Components/Board'
import Nav from '../Components/NavbarComponent'
import Sidebar from '../Components/Sidebar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <div className="container">
          <div className="row">

            <div className="col-xs-9 col-md-9 col-lg-9 container">
              <Board count={10}/>
            </div>
            <div className="col-xs-3 col-md-3 col-lg-3 container">
              <Sidebar/>
            </div>

          </div>
        </div>

      </div>

    );
  }
}


export default App;
