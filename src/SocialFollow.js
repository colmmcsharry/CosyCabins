import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import NewdropSml from './NewdropSml.js'


 const dropstyle2 = {
  fontFamily: 'Patrick Hand SC',
  color: '#41403e',
  backgroundColor:'transparent',
  margin:'0px',
  opacity:'0.9',
  padding:'11px 9px',
  height: 'auto',
  border: '2px solid #41403e',
  borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px'
}

export default function SocialFollow() {
  return (
    <div className="social-container">
    <span>
    <ul className="footerlist">
    <Link to ="/about"><li>About</li></Link>
    <Link to ="/contact"><li>Contact</li></Link>
    <Link to ="/blogs"><li>Blog</li></Link>
    </ul>
      <h3 style={{fontFamily:'Patrick Hand SC', color:'#41403'}}>@CubbyCabins</h3>
      <a
        href="https://www.youtube.com"
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x"/>
      </a>
      <a
        href="https://www.facebook.com/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <div className="footersearch"><NewdropSml style={dropstyle2} /></div>
      </span>
    </div>
  );
}