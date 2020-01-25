import React, { Component, useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import stress from './stress.jpg'
import ireland from './ireland.png'
import CouldbeYou from './CouldbeYou.png'
import einstein from './einstein.jpg'
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

		<br/> <br/>

		<p style= {{fontFamily:'Quicksand', fontSize:'1rem'}}>We create cosy little cabins in rustic locations where you can come and have some 'you-time'</p>


		<figure><img className="ireland" src={ireland} height='400px' width= '400px'/><figcaption style={{position:'relative', bottom: '3rem',fontFamily:'Quicksand', fontSize:'.9rem'}}>No matter where you live in Ireland
		 you can find a Cubby Cabin within an hour's drive</figcaption></figure>
			<br/>
		
		<p style= {{fontFamily:'Quicksand', fontSize:'1rem'}}> Our cabins are easily booked, easily accessed and easily affordable!</p><br/>	
	<img className="highimage" src={CouldbeYou}/>			
	
		<br/>
		<div className="aboutgrid2">
					<div className="abouttext2"> here is the example text for the paragraph.<br/>
					here is the example text for the paragraph.<br/><br/>	
					here is the example text for the paragraph.here is the example text<br/>  
					here is the example text for the paragraph. example text for <br/>
					here is the example text for the paragraph.example text for the<br/><br/>
					here is the example text for the paragraph.<br/>
					here is the example text for the paragraph.example text for the h<br/>
					 here is the example text for the paragraph.<br/>
					 </div>
					 <div className="quotewrapper2"><div className="namewrapper"> <span>The earth has music for those who listen <br/></span> <br/>- William Shakespeare</div> 
					 </div>

		</div>

<br/> <br/>
	<div className="aboutgrid2">
					<div className="abouttext2 second"> here is the example text for the paragraph.<br/>
					here is the example text for the paragraph.<br/><br/>	
					here is the example text for the paragraph.here is the example text<br/>  
					here is the example text for the paragraph. example text for <br/>
					here is the example text for the paragraph.example text for the<br/><br/>
					here is the example text for the paragraph.<br/>
					here is the example text for the paragraph.example text for the h<br/>
					 here is the example text for the paragraph.<br/>
					 </div>
					 <div className="quotewrapper2"><div className="namewrapper"> <span>Without great solitude, no great work is possible <br/></span> <br/>- Pablo Picasso</div> 
					 </div>

		</div>

		<img className="einstein" src={einstein}/>

</div>
		)

}