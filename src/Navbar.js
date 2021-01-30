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
    /*this is the new function*/
// window.onscroll = function() {myFunction()};

// function myFunction() {
//   if (document.body.scrollTop < 150 || document.documentElement.scrollTop < 150) {
//     document.getElementById("Mynavbar").className = "test";
//   } else {
//     document.getElementById("Mynavbar").className = "test2";
//   }
// }
 /*new function ends*/

/*so I simply put in the && condition, so now even if im scrolling down, you also need to be over 150 pixels down from the top,
before the navbar slides up out of view*/

    var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos && document.body.scrollTop < 50 || document.documentElement.scrollTop < 50 ) {
    document.getElementById("Mynavbar").style.top = "0";
  } else {
    document.getElementById("Mynavbar").style.top = "-180px";
  }
  prevScrollpos = currentScrollPos;
}
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