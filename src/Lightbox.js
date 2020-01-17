import React from "react";
import Galrender from './Galrender'
import { dublinphotos, kerryphotos, galwayphotos, corkphotos, belfastphotos } from './photos.js'
import Cabin from './Cabin.js'


/*this component is called Lightbox but really it renders the whole cabin profile and gives it the props, was too lazy to change name*/
function Lightbox(props) {
  const place = props.place
  
  

  if (place=== "Dublin") {
    return (  <React.Fragment>

      <Cabin title="Dublin Cabin" mainimg="https://inhabitat.com/wp-content/blogs.dir/1/files/2016/09/Tiny-Cabins-by-Harvard-startup-Getaway-889x673.jpg"
       price="$50 p/night" facilities="double bed, kettle, oven, table" photos={dublinphotos} />

      
       </React.Fragment>
    );
  } else if (place=== "Galway") {
    return ( <React.Fragment>
     
      
       </React.Fragment>
    );
  } else if (place=== "Kerry") {
    return ( <React.Fragment>
    
  
      </React.Fragment>
    );
  } else if (place=== "Cork") {
    return ( <React.Fragment>
   
       </React.Fragment>
    );
  } else if (place=== "belfast") {
    return ( <React.Fragment>
      
    
       </React.Fragment>
    );
  } 



}

export default Lightbox;
