import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from 'react-router-dom';
import SingleSource from './SingleSource.js'
import wildcabin from './pics/screenshot2.jpg'
import cabinwindow from './pics/cabinwindow.jpg'
import cabintriangle from './pics/cabintriangle.jpg'
import yellowcabin from './pics/yellowcabin.jpg'

import outside from './pics/outside.jpg'
import boat from './pics/boat.jpg'
import snowycabin from './pics/snowycabin.jpg'

/*remember there is an AliceCarousel.CSS file that can be edited too, like in my group proj version, can remove buttons, etc.*/

class MyCarousel extends React.Component {
  onSlideChange(e) {
    
  }

  onSlideChanged(e) {
    
  }

  render() {
    const responsive = {
      0: {
        items: 1
      },

      600: {
        items: 1
      },
      
      800: {
        items: 2
      },


      1101: {
        items: 3
      }
    };

    return (
      <div className="mainCarouselWrapper">
      <AliceCarousel
        duration={5000}
        autoPlay={true}
        startIndex={2}
        infinite={true}
        buttonsDisabled={true}
        dotsDisabled={true}
        fadeOutAnimation={false}
        mouseDragEnabled={true}
        stopAutoPlayOnHover={false}
        playButtonEnabled={false}
        responsive={responsive}
        autoPlayInterval={50}
        autoPlayDirection="ltr"
        autoPlayActionDisabled={false}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      >
        <div className="Mypicsclass">
        
         
            <img
              className="carimages"
              src={snowycabin} alt="designer"
            />
            

          
          
        </div>
        <div className="Mypicsclass">
        
         
            <img
              className="carimages"
              src={cabintriangle} alt="builder"
            />

 
             
  
          
          
        </div>
        <div className="Mypicsclass">
        
         
            <img
              className="carimages one"
              src={boat} alt="chef"
            />
            
 
          
          
        </div>
        <div className="Mypicsclass">
        
         
            <img
              className="carimages two"
              src={wildcabin} alt="accountant"
            />
            
 
          
         
        </div>
        <div className="Mypicsclass">
        
         
            <img
              className="carimages three"
              src={cabinwindow} alt="clown" 
            />
            
 
          
          
        </div>
      </AliceCarousel>
      </div>
    );
  }
}

export default MyCarousel;