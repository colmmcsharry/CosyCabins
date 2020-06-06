import React from 'react';
import ReactDOM from 'react-dom';
/*import Gallery from 'react-grid-gallery';*/
import { photos } from "./photos";
import SingleSource from './SingleSource.js'
import wildcabin from './pics/screenshot2.jpg'
import cabinwindow from './pics/cabinwindow.jpg'
import cabintriangle from './pics/cabintriangle.jpg'
import mountaincabin from './pics/woods.jpg'
import mountaincabinsml from './pics/woodssml.jpg'
import inside from './pics/inside.jpg'
import insidetiny from './pics/insidetiny.jpg'
import pjjsml from './pics/pjimagesml.jpg'
import pjjbig from './pics/pjimagelrg.jpg'
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
              

                        <div className="moving-clouds">
                                    </div>
       </div>
      </div>  

    <div className="intro"> 
      Life stressing you out?

      <br/> <br/> <br/> <br/>

    Feeling trapped?  

        <br/> <br/> <br/> <br/>

    Escape to a Cosy Cabin!    

    </div>


    <div className="GalleryWrapper"><MyCarousel/></div>
    
      




     <div className="galimg">
          <div className="zoomableone"> <ModalImage
  className=" zindex carimages"
  small={mountaincabinsml}
  large={mountaincabin}  
  hideDownload={true}
/>  </div>

    <div className="resptext"> Our cabins are the perfect getaway <br/> 
        Out of the city, but not out of reach <br/>
         <br/></div>


          </div>   



     <div className="galimg">
            <div className="zoomabletwo"><ModalImage
  className=" zindex carimages"
  small={insidetiny}
  large={inside}  
  hideDownload={true}
/></div>
    <div className="resptexttwo"> We have cabins in every province <br/> 
        Fully heated, fully equipped, fully private <br/>
         <br/></div>


          </div>  

    <div className="galimg">
          <div className="zoomableone">  <ModalImage
  className=" zindex carimages"
  small={pjjsml}
  large={pjjbig}  
  hideDownload={true}
/></div>

    <div className="resptext"> So whether you're a yogi, writer, philosopher <br/> or just want a change of scenery... 
       
         </div>
         <span className="closing"> We have a Cosy Cabin for you </span>

          </div>   






          
    <br/> <br/> <br/> <br/> 
     <div className="Youtubee"><YouTube id='qACkbI3dhxQ?t=31' /></div>


    <br/> <br/> 



    </React.Fragment>
)

}