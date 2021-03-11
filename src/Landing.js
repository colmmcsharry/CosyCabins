import React from 'react';
import ReactDOM from 'react-dom';
import LazyLoad from "react-lazyload";
import { photos } from "./photos";
import SingleSource from './SingleSource.js'
import wildcabin from './pics/screenshot2.jpg'
import cabinwindow from './pics/cabinwindow.jpg'
import cabintriangle from './pics/cabintriangle.jpg'
import highcabin from './pics/woods.jpg'
import highcabinsml from './pics/woodssml.jpg'
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
import styled, { createGlobalStyle } from 'styled-components/macro'
import { keyframes } from 'styled-components'
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedIn
} from "@fortawesome/free-brands-svg-icons";



const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg) scale(2);

  }
`

const Section = styled.section`
padding: 5%;
font-size:1.4rem;
font-family:Patrick Hand SC;
color:var(--mycharcoal);

p.closing {margin-bottom:240px;}

&.intro {
  padding:0;
  margin-bottom:120px;

  p {margin-bottom:120px}
}

 @media (min-width: 2000px){
 font-size:1.9rem}

`



const Gridwrap = styled.div`
display:grid;
place-items:center;
grid-auto-rows:1fr;
padding:5%;
border-color:red;
 grid-row-gap:140px;
  margin-bottom:240px;
  /*this is the equivalent of margin-bottom for each row */

 /*from tablets up, two columns, images at 80% */ 
  @media (min-width: 650px) {
    grid-template-columns:1fr 1fr;
      grid-row-gap:240px;
   & .zoompic {width:30rem;}
  }
`
const StyledModal = styled(ModalImage)`
border: solid 2px black;
border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
width:120%;


`


const Textdiv = styled.div`

 @media (min-width: 650px){
padding:10%;
  
  &.rev {
     grid-column:2;
     grid-row:2;}

 }
`


export default function Landing  () {

return (
  <React.Fragment>
{/*maincontainer is just for the landing image*/}
    <div id ="maincontainer">  
            <div className="maincontainerfilter">
               <p className="escape" >Escape</p>
 <div className="moving-clouds">
</div>
       </div>
      </div>  
{/*landing image ends*/}




<Section className="intro">
    <p>
      Life stressing you out?
      <br/> <br/> 
    Feeling trapped?  
        <br/> <br/> 
    Escape to a Cosy Cabin!    
    </p>
  <LazyLoad height={450} once offset={250}>     
    <div className="GalleryWrapper">

    <MyCarousel/>

    </div>
      </LazyLoad>
</Section>



{/*3 pics and texts begin*/}
<Section>


<Gridwrap>

       <Textdiv>Our cabins are the perfect getaway
       <br/><br/>
Out of the city, but not out of reach
       </Textdiv>
 <LazyLoad height={450} once offset={50} >      
 <StyledModal
  small={highcabinsml}
  large={highcabin}  
  hideDownload={true}
  className="zoompic"
/>
</LazyLoad>
 <Textdiv className="rev">We have cabins in every province
 <br/><br/>
Fully heated, fully equipped, fully private
       </Textdiv>
<LazyLoad height={450} once offset={250} >
 <StyledModal
  small={insidetiny}
  large={inside}  
  hideDownload={true}
   className="zoompic"
/>
</LazyLoad>
<Textdiv>So whether you're a yogi, writer, philosopher
<br/><br/>
or just want a change of scenery...
       </Textdiv>

 <LazyLoad height={450} once offset={250} >      
 <StyledModal
  small={pjjsml}
  large={pjjbig}  
  hideDownload={true}
   className="zoompic"
/>
</LazyLoad>
     </Gridwrap>

 





 <p className="closing"> We have a Cosy Cabin for you </p>

   

{/*3 pics and texts end*/}




          
  <LazyLoad height={450} offset={350} >
     <div className="Youtubee"><YouTube id='qACkbI3dhxQ?t=31' /></div>
</LazyLoad>
</Section>

    </React.Fragment>
)

}