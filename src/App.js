import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { HashRouter, Route, Link } from "react-router-dom";
// import Gallery from 'react-grid-gallery';
import './App.css'
import { photos } from "./photos";
import Final from './Final'
import SingleSource from './SingleSource.js'
import cabinnight from './pics/cabinnight.jpg'
import wildcabin from './pics/screenshot2.png'
import cabinwindow from './pics/cabinwindow.jpg'
import cabintriangle from './pics/cabintriangle.jpg'
import yellowcabin from './pics/yellowcabin.jpg'
import outside from './outside.png'
import mountaincabin from './pics/mountaincabin.jpg'
import inside from './inside.png'
import yogi from './pics/yogi.png'
import MyCarousel from './Carousel.js'
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Navbar from "./Navbar.js";
import { faSearch } from '@fortawesome/free-solid-svg-icons';







function App() {
   // const  myims = images.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} />) 

  return (
    <HashRouter basename='/'>
 <React.Fragment>
    <div className="App">
    
   		<div id ="maincontainer">  
        <Navbar />
        <div className="maincontainerfilter">
        

              <p className="escape" >Escape</p>
          

                    <div className="moving-clouds"
                              style={{
                                backgroundImage: "url(" + require("./clouds.png") + ")" }}>
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

  




 <div className="galimg">
      <div className="zoomableone">  <SingleSource src={mountaincabin} /></div>

<div className="resptext"> Our cabins are the perfect getaway <br/> 
    Out of the city, but not out of reach <br/>
     <br/></div>


      </div>   



 <div className="galimg">
        <div className="zoomabletwo"><SingleSource src={inside} /></div>
<div className="resptexttwo"> We have cabins in every province <br/> 
    Fully heated, fully equipped, fully private <br/>
     <br/></div>


      </div>  

<div className="galimg">
      <div className="zoomableone">  <SingleSource src={yogi} /></div>

<div className="resptext"> So whether you're a yogi, writer, philosopher or just want a change of scenery <br/> 
    We have a cubby cabin for you <br/>
     <br/></div>


      </div>   






      <button className="lined thin"> CLICK ME! </button> 
<br/> <br/> <br/> <br/> 
Put Youtube video here




</div> {/*this one is app div*/}


   </React.Fragment>
   </HashRouter>
  );

}

export default App;






