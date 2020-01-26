import React from 'react';
import ReactDOM from 'react-dom';
import Galrender from './Galrender.js'
import SingleSource from './SingleSource'


export default function Cabin (props) {



return (

	<React.Fragment>

	<div className="cabinprofilewrapper">

	<h1> {props.title} </h1>
	<br/>
	<div className="cabinzoomable"> <SingleSource src={props.mainimg} /></div>
	 
	 <p> This Cubby Cabin is only 30 mins drive away from Dublin, but it feels like a totally different world!
	 <br/> <br/> Tucked away in an evergreen forest, surrounded by the sounds of nature, you'll be able to fully unwind.
	 <br/> <br/> The cabin is stocked with the essentials and retains a homely, cosy feel. <br/><br/>
	 Roast marshmallows by the fire, laze in the hammock or lay in bed and listen to the raindrops. <br/><br/>
	 You can do it all in our Dublin cabin for less than a night in a four star hotel!
	  </p>

	 <ul style={{listStyleType : "none"}}>
	 	<li> <span style={{fontFamily : 'EB Garamond', fontWeight: 'bold'}} > Price: </span> {props.price} </li><br/>
	 	<li> <span style={{fontFamily : 'EB Garamond', fontWeight: 'bold'}} >Facilities: </span> {props.facilities} </li><br/>
	 	<li> <span style={{fontFamily : 'EB Garamond', fontWeight: 'bold'}} >Nearby: </span> {props.nearby} </li>
	 </ul>

	 	<Galrender cityphotos={props.photos}/>

	 </div>
	 	</React.Fragment>
	)




}

 // <img className="mainimg" src={props.mainimg} />