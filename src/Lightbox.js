import React from "react";
import Galrender from './Galrender'
import { dublinphotos, kerryphotos, galwayphotos, corkphotos, belfastphotos } from './photos.js'
import Cabin from './Cabin.js'


/*this component is called Lightbox but really it renders the whole cabin profile and gives it the props, was too lazy to change name*/
function Lightbox(props) {
  const place = props.place
  
  

  if (place=== "Dublin") {
    return (  <React.Fragment>

      <Cabin title="Dublin" mainimg="https://i.pinimg.com/originals/0f/c6/b5/0fc6b5e934a48cb8d0c57fa51144152f.jpg"
       price="€50 p/night" facilities="double bed, kettle, oven, table, chairs, fire pit" nearby="lakes (Lough Tea), Dublin/Wicklow mountains, waterfalls"
        photos={dublinphotos} />

      
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
