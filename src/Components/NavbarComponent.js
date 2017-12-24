import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../main/navbar.css'


export default class Sidebar extends Component{
  constructor() {
    super();
  }
  render(){
    return (

      <div className="container">

        <nav className="navbar navbar-dark bg-primary  navbar-expand-lg">
          <a className="navbar-brand" href="#">NoteMaster</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#"> About <span className="sr-only">(current)</span></a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Notes
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Important</a>
                  <a className="dropdown-item" href="#">Movies to watch</a>
                  <a className="dropdown-item" href="#">Class</a>
                  <a className="dropdown-item" href="#">Create your own category</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
