import React from 'react';
import ReactDOM from 'react-dom';
import Galrender from './Galrender.js'



export default function Cabin (props) {



return (

	<React.Fragment>

	<div className="cabinprofilewrapper">

	<h1> {props.title} </h1>

	 <img className="mainimg" src={props.mainimg} />

	 <p> this is the big blurb all about this cabin, where I talk <br/>
	 about all the wonders of it and where it's placed, etc. <br/>
	 this is the big blurb all about this cabin, where I talk <br/>
	 about all the wonders of it and where it's placed, etc.
	  </p>

	 <ul style={{listStyleType : "none"}}>
	 	<li> <span style={{fontFamily : 'EB Garamond', fontWeight: 'bold'}} > Price: </span> {props.price} </li>
	 	<li> <span style={{fontFamily : 'EB Garamond', fontWeight: 'bold'}} >Facilities: </span> {props.facilities} </li>
	 </ul>

	 	<Galrender cityphotos={props.photos}/>

	 </div>
	 	</React.Fragment>
	)




}