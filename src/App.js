import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { HashRouter, Route, Link } from "react-router-dom";
// import Gallery from 'react-grid-gallery';
import './App.css'
import { photos } from "./photos";
import Final from './Final'
import SingleSource from './SingleSource.js'
import cabinforest from './pics/cabinforest.jpg'
import wildcabin from './pics/screenshot2.png'
import cabinwindow from './pics/cabinwindow.jpg'
import cabintriangle from './pics/cabintriangle.jpg'
import yellowcabin from './pics/yellowcabin.jpg'
import MyCarousel from './Carousel.js'
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";







function App() {
   // const  myims = images.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} />) 

  return (
    <HashRouter basename='/'>
 <React.Fragment>
    <div className="App">
    
   		<div id ="maincontainer">  
        <div className="maincontainerfilter">

        <div className="header"> here be te header </div>

              <p style ={{paddingTop:'400px', fontFamily: 'cursive', fontSize: '17px'}}>Escape</p>
          

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

Escape to Cubby Cabins!    

</div>


<div className="GalleryWrapper"><MyCarousel/></div>

  <div className="infoContainer">

  
  </div>




 <div className="galimg">
      <div className="zoomableone">  <SingleSource src={yellowcabin} /></div>

<div className="resptext"> here is where i will start describing the cabins <br/> 
    here is where i will start describing the cabins <br/>
    here is where i will start describing the cabins <br/></div>


      </div>   



 <div className="galimg">
        <div className="zoomabletwo"><SingleSource src={yellowcabin} /></div>
<div className="resptexttwo"> here is where i will start describing the cabins <br/> 
    here is where i will start describing the cabins <br/>
    here is where i will start describing the cabins <br/></div>


      </div>   

</div> {/*this one is app div*/}


   </React.Fragment>
   </HashRouter>
  );

}

export default App;






