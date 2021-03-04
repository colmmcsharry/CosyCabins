/*I have no need to make the dropdown and the items inside the navbar seperate components, as they will always be on screen, regardless of route*/
import logo from "./pics/home.png";
import React from "react";
import { Link } from 'react-router-dom';
import Smalldrop from "./Smalldrop";
import NewdropSml from "./NewdropSml.js";



 const Dropstyle = {
  color: '#1B6EB0',
  backgroundColor:'transparent',
  margin:'0px',
  padding:'11px 9px',
  height: 'auto',
  border: '1px solid #1B6EB0'
}


export default class Navbar extends React.Component {

  render() {

    return (
      <div id="Mynavbar">
        <div className="logocontainer">
          <Link to="/CosyCabins">
            <img src={logo} className="logo" alt="our logo"
            /> 
          </Link>
        </div>
        <div className="dropcontainer">
          <div className="dropbar">
            <NewdropSml style={Dropstyle} />
          </div>
          <div className="hamburger">
            <Smalldrop />
          </div>
        </div>  
      </div>
    );
  }
}