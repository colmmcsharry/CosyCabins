import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter as HashRouter, Route, Link } from "react-router-dom";
import routes from './routes.js'
/*import Gallery from 'react-grid-gallery';*/
import './App.css'
import { photos } from "./photos";
import SingleSource from './SingleSource.js'
import cabinnight from './pics/cabinnight.jpg'
import wildcabin from './pics/screenshot2.png'
import cabinwindow from './pics/cabinwindow.jpg'
import cabintriangle from './pics/cabintriangle.jpg'
import yellowcabin from './pics/yellowcabin.jpg'
import outside from './pics/outside.png'
import mountaincabin from './pics/mountaincabin.jpg'
import inside from './pics/inside.png'
import yogi from './pics/yogi.png'
import pjj from './pics/pjimage.jpg'
import swipe from './pics/swipe.png'
import MyCarousel from './Carousel.js'
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Navbar from "./Navbar.js";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import YouTube from 'react-youtube-embed'
import SocialFollow from './SocialFollow.js'
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedIn
} from "@fortawesome/free-brands-svg-icons";





function App() {
   // const  myims = images.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} />) 



  return (

    <HashRouter basename='/'>
 <React.Fragment>

    <div className="App">
    <Navbar />
   		{routes}

<SocialFollow />

</div> {/*this one is app div*/}


   </React.Fragment>
   </HashRouter>
  );

}

export default App;






