import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from 'react-router-dom';
import SingleSource from './SingleSource.js'
import cabinforest from './pics/cabinforest.jpg'
import wildcabin from './pics/screenshot2.png'
import cabinwindow from './pics/cabinwindow.jpg'
import cabintriangle from './pics/cabintriangle.jpg'
import yellowcabin from './pics/yellowcabin.jpg'

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
        duration={2500}
        autoPlay={true}
        startIndex={2}
        infinite={true}
        buttonsDisabled={true}
        dotsDisabled={true}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        stopAutoPlayOnHover={false}
        playButtonEnabled={false}
        responsive={responsive}
        autoPlayInterval={100}
        autoPlayDirection="rtl"
        autoPlayActionDisabled={false}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      >
        <div className="Mypicsclass">
        <Link to="/designers">
         
            <img
              className="carimages"
              src={yellowcabin} alt="designer"
            />
            

          
          </Link>
        </div>
        <div className="Mypicsclass">
        <Link to="/builders">
         
            <img
              className="carimages"
              src={cabintriangle} alt="builder"
            />

 
             
  
          
          </Link>
        </div>
        <div className="Mypicsclass">
        <Link to="/chefs">
         
            <img
              className="carimages one"
              src={cabinforest} alt="chef"
            />
            
 
          
          </Link>
        </div>
        <div className="Mypicsclass">
        <Link to="/accountants">
         
            <img
              className="carimages two"
              src={wildcabin} alt="accountant"
            />
            
 
          
          </Link>
        </div>
        <div className="Mypicsclass">
        <Link to="/clowns">
         
            <img
              className="carimages three"
              src={cabinwindow} alt="clown" 
            />
            
 
          
          </Link>
        </div>
      </AliceCarousel>
      </div>
    );
  }
}

export default MyCarousel;