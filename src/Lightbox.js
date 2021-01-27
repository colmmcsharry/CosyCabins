import React from "react";
import Galrender from './Galrender'
import { dublinphotos, kerryphotos, galwayphotos, corkphotos, belfastphotos, shuffled, bshuffled } from './photos.js'
import Cabin from './Cabin.js'
import Dubcabin from './pics/Dubcabin.jpg'
import agalwaycab from './pics/agalwaycab.jpeg'
import acorkcab from './pics/acorkcab.jpg'
import kerry from './pics/cabinforest.jpg'
import belfast from './pics/belfast.jpeg'
// import Weather from './Weather.js'
// import Weather7 from './Weather7.js'
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import {allcabintexts} from './cabintexts.jsx'
import Forecast from './Forecast.js'


/*this component is called Lightbox but really it renders the whole cabin profile and gives it the props, was too lazy to change name*/
function Lightbox(props) {
  const place = props.place;
  

const { data, isLoading, errorMessage } = useOpenWeather({
    key: process.env.REACT_APP_API_KEY,
    lat: props.lat,
    lon: props.lon,
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });

const customStyles = {
  fontFamily:  'Helvetica, sans-serif',
  gradientStart:  '#FEFFEF',
  gradientMid:  '#FEFFEF',
  gradientEnd:  '#FEFFEF',
  locationFontColor:  'black',
  todayTempFontColor:  'black',
  todayDateFontColor:  'black',
  todayRangeFontColor:  'black',
  todayDescFontColor:  'black',
  todayInfoFontColor:  'black',
  todayIconColor:  '#FFF',
  forecastBackgroundColor:  '#FEFFEF'
};

   

  

  if (place === "Dublin") {
    return (  <React.Fragment>

      <Cabin title="Dublin" mainimg={Dubcabin}
       price="€50 p/night" facilities="double bed, kettle, oven, table, chairs, fire pit" nearby="lakes (Lough Tea), Dublin/Wicklow mountains, waterfalls"
        photos={dublinphotos} text={allcabintexts.dublintext} />
      {/*  <Weather placeprop="Dublin"/>*/}


      <Forecast lat="53.3498" lon="-6.3106" locationlbl="Dublin"/>

       </React.Fragment>
    );

  } else if (place=== "Galway") {
    return ( <React.Fragment>


     <Cabin title="Galway" mainimg={agalwaycab}
       price="€85 p/night" facilities="king bed, kettle, microwave, table, chairs, fire pit" nearby="Cliffs of Moher, many mountains"
        photos={belfastphotos} text={allcabintexts.galwaytext} />

        <Forecast lat="53.27194" lon="-9.04889" locationlbl="Galway"/>

    {/*    <Weather placeprop="galway"/>*/}
       </React.Fragment>
    );
  } else if (place=== "Kerry") {
    return ( <React.Fragment>
      <Cabin title="Kerry" mainimg={kerry}
       price="€75 p/night" facilities="king bed, kettle, microwave, table, chairs, fire pit" nearby="Dingle harbour, Blarney Stone, Ring of Kerry"
        photos={bshuffled} text={allcabintexts.kerrytext} />

    <Forecast locationlbl="Kerry" lat="52.1667" lon="-9.7500" />
  
      </React.Fragment>
    );
  } else if (place=== "Cork") {

    return ( <React.Fragment>
   
      <Cabin title="Cork" mainimg={acorkcab}
       price="€70 p/night" facilities="king bed, kettle, microwave, table, chairs, fire pit" nearby="Blarney Castle, Ballycotton cliff walk"
        photos={shuffled} text={allcabintexts.corktext} />

        <Forecast locationlbl="Cork" lat="51.89797" lon="-8.47061"/>


       </React.Fragment>
    );
  } else {

    return ( <React.Fragment>
      
      <Cabin title="Belfast" mainimg={belfast}
       price="€95 p/night" facilities="king bed, kettle, microwave, table, chairs, fire pit" nearby="Giant's Causeway, lakes"
        photos={shuffled} text={allcabintexts.belfasttext} />
    
       <Forecast locationlbl="Belfast" lat="54.5973" lon="-5.9301" />

       </React.Fragment>
    );
  } 


}

export default Lightbox;

// "https://i.pinimg.com/originals/0f/c6/b5/0fc6b5e934a48cb8d0c57fa51144152f.jpg"