import React from 'react';
import ReactDOM from 'react-dom';
import Galrender from './Galrender.js'
import SingleSource from './SingleSource'
import ModalImage from "react-modal-image";
import Weather from './Weather.js'
import {allcabintexts} from './cabintexts.jsx'


export default function Cabin (props) {



return (

	<React.Fragment>

	<div className="cabinprofilewrapper">

	<h1> {props.title} </h1>
	<br/>
	
	<div className="cabinzoomable"> <ModalImage
  className=" zindex small cabinmain"
  small={props.mainimg}
  large={props.mainimg} 
  hideDownload={true}
/> </div>
	 

	 {props.text}
	 

	 <ul style={{listStyleType : "none"}}>
	 	<li> <span style={{fontFamily : 'Tahoma', fontWeight: 'bold'}} > Price: </span> {props.price} </li><br/>
	 	<li> <span style={{fontFamily : 'Tahoma', fontWeight: 'bold'}} >Facilities: </span> {props.facilities} </li><br/>
	 	<li> <span style={{fontFamily : 'Tahoma', fontWeight: 'bold'}} >Nearby: </span> {props.nearby} </li>
	 </ul>
	 	

	 	<Galrender cityphotos={props.photos}/>

	 </div>
	 	</React.Fragment>
	)




}

 // <img className="mainimg" src={props.mainimg} />