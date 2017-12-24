import React, { Component } from 'react'
import '../main/Sidebar.css'

export default class Sidebar extends Component {
  constructor() {
    super();
  }
  render(){
    return(
      <div >
        <center><h3 id="headingName"> Menu </h3></center>
        <hr></hr>
        <div className="row colorPalet">
          <button className="btn-link buttonHover"><div className="circle-green"></div></button>
          <button className="btn-link buttonHover"><div className="circle-red"/></button>
          <button className="btn-link buttonHover"><div className="circle-purple"/></button>
          <button className="btn-link buttonHover"><div className="circle-brown"/></button>
          <button className="btn-link buttonHover"><div className="circle-blue"/></button>
        </div>


      </div>
    );
  }
}
