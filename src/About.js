import React, { Component, useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import stress from './stress.jpg'

/*the below way is the new function/hooks way of doing componentDidMount, same as I did it in the Blogs component*/

export default function About () {

	useEffect(() => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
  }, []);

	return (

<div className="aboutcontainer">
		<h1> About CubbyCabins</h1> <br/><br/>
		<p>Cubby Cabins was created as the antidote to stress</p>

		<br/>
		<img src={stress} height='300px' />
		<br/>  <br/>
		<p>Ever felt trapped in work, and wish you could just escape?
<br/> <br/>
		Now you can with Cubby Cabins! </p>

		<br/>
		<div className="nongridabout">
			<div className="quote"><blockquote>Without great solitude, no great work is possible</blockquote><br/> - Pablo Picasso </div>
				
			<div className="nongridtext">
				<p>No matter where you live in Ireland you can find a Cubby Cabin within an hour's drive</p>
				
				<br/> Check out our blog to read more about the rejuvenating effects of time in nature
				
			</div>
		</div>
		<div className="aboutgrid">
					<div className="abouttext"> here is the example text for the paragraph.<br/>
					here is the example text for the paragraph.<br/>	
					here is the example text for the paragraph.<br/>
					here is the example text for the paragraph. example text for the paragraph.<br/>
					here is the example text for the paragraph.<br/>
					here is the example text for the paragraph.<br/>
					here is the example text for the paragraph.<br/>
					 here is the example text for the paragraph.<br/>
					 </div>
					 <div className="quotewrapper"> <span>Without great solitude, no great work is possible <br/></span> <br/>- Pablo Picasso </div>

		</div>
		<br/>
		<div className="aboutgrid2">
					<div className="abouttext2"> here is the example text for the paragraph.<br/>
					here is the example text for the paragraph.<br/>	
					here is the example text for the paragraph.here is the example text for the paragraph. example text for the paragraph
					here is the example text for the paragraph. example text for the paragraph.<br/>
					here is the example text for the paragraph.<br/>
					here is the example text for the paragraph.<br/>
					here is the example text for the paragraph.<br/>
					 here is the example text for the paragraph.<br/>
					 </div>
					 <div className="quotewrapper2"><div className="namewrapper"> <span>Without great solitude, no great work is possible <br/></span> <br/>- Pablo Picasso</div> 
					 </div>

		</div>

<br/> <br/>
	<div className="aboutgrid2">
					<div className="abouttext2 second"> here is the example text for the paragraph.<br/>
					here is the example text for the paragraph.<br/>	
					here is the example text for the paragraph.here is the example text for the paragraph. example text for the paragraph
					here is the example text for the paragraph. example text for the paragraph.<br/>
					here is the example text for the paragraph.<br/>
					here is the example text for the paragraph.<br/>
					here is the example text for the paragraph.<br/>
					 here is the example text for the paragraph.<br/>
					 </div>
					 <div className="quotewrapper2"><div className="namewrapper"> <span>Without great solitude, no great work is possible <br/></span> <br/>- Pablo Picasso</div> 
					 </div>

		</div>



</div>
		)

}