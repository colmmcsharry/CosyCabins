import React from 'react';
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
import Lightbox from './Lightbox.js'
import ModalImage from "react-modal-image";

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedIn
} from "@fortawesome/free-brands-svg-icons";


export default function Landing  () {

return (
  <React.Fragment>
    <div id ="maincontainer">  
            
            <div className="maincontainerfilter">
            

                  <p className="escape" >Escape</p>
              

                        <div className="moving-clouds"
                                  style={{
                                    backgroundImage: "url(" + require("./pics/clouds.png") + ")" }}>
                                    </div>
       </div>
      </div>  

    <div className="intro"> 
      Life stressing you out?

      <br/> <br/> <br/> <br/>

    Feeling trapped?  

        <br/> <br/> <br/> <br/>

    Escape to a Cubby Cabin!    

    </div>


    <div className="GalleryWrapper"><MyCarousel/></div>
    <img className="swipe" src={swipe}/>
      

<ModalImage
  
  small={'https://aautio.github.io/react-modal-image/example_img_small.jpg'}
  large={'https://aautio.github.io/react-modal-image/example_img_large.jpg'}  
/>


     <div className="galimg">
          <div className="zoomableone">   </div>

    <div className="resptext"> Our cabins are the perfect getaway <br/> 
        Out of the city, but not out of reach blah <br/>
         <br/></div>


          </div>   



     <div className="galimg">
            <div className="zoomabletwo" tabIndex="-1"><SingleSource src={inside} /></div>
    <div className="resptexttwo"> We have cabins in every province <br/> 
        Fully heated, fully equipped, fully private <br/>
         <br/></div>


          </div>  

    <div className="galimg">
          <div className="zoomableone">  <SingleSource src={pjj} /></div>

    <div className="resptext"> So whether you're a yogi, writer, philosopher <br/> or just want a change of scenery... 
       
         </div>
         <span className="closing"> We have a cubby cabin for you </span>

          </div>   






          
    <br/> <br/> <br/> <br/> 
    <div className="Youtubee"><YouTube id='qACkbI3dhxQ?t=31' /></div>


    <br/> <br/> 


    </React.Fragment>
)

}