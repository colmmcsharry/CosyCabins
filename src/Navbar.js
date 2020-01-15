/*I have no need to make the dropdown and the items inside the navbar seperate components, as they will always be on screen, regardless of route*/
import logo from "./home.png";
import React from "react";
import { Link } from 'react-router-dom';
import Smalldrop from "./Smalldrop";
import NewdropSml from "./NewdropSml";

export default class Navbar extends React.Component {




  render() {
    var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("Mynavbar").style.top = "0";
  } else {
    document.getElementById("Mynavbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}
    return (
      <div id="Mynavbar">
        <div className="logocontainer">
          <Link to="/">
            <img src={logo} className="logo" alt="our logo"
            /> 
          </Link>
        </div>
        <div className="dropcontainer">
          <div className="dropbar">
            <NewdropSml />
          </div>
          <div className="hamburger">
            <Smalldrop />
          </div>
        </div>  
      </div>
    );
  }
}