import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import stress from './pics/stress.jpg'
import stressmob from './pics/stressmob.jpg'
import ireland from './pics/Irelandsharp.png'
import einstein from './pics/einstein.jpg'
import einsteinlrg from './pics/einsteinlrg.jpg'
import einsteinmob from './pics/einsteinmob.jpg'
import Weather from './Weather.js'
import ResponsiveGallery from './ResponsiveGallery.js'
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
		<React.Fragment>
		

<div className="aboutcontainer">
		<h1> About CubbyCabins</h1> <br/><br/>
		<p>Cubby Cabins was created as the antidote to stress</p>

		<br/>
		<img src={stress} height='300px' style={{border: 'solid 1px #41403e', borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px'}} />
		
		
		<br/>  <br/>
		<p>Ever felt trapped in work, and wish you could just escape?
<br/> <br/>
		Now you can with Cubby Cabins! </p>

		<br/> <br/>
<div id="mainhighcontainer" >
		<div id="highcontainer" >
			<div id="could">This could be you </div>
		</div>
	</div>		

	<br/><br/> <br/><br/>
		<p style= {{fontFamily:'Tahoma', fontSize:'1rem'}}>We create cosy little cabins in rustic locations where you can come and have some 'you-time'
		<br/> <br/>Our cabins are easily booked, easily accessed and easily affordable! </p>

		<figure><img className="ireland" src={ireland} height='400px' width= '400px'/><figcaption style={{position:'relative', bottom: '2rem',fontFamily:'Tahoma', fontSize:'1rem'}}>Our locations</figcaption></figure>
			<br/>
		
	

	
		<br/> <br/> 
			<h2>Why come to a cabin?</h2>
		<div className="aboutgrid2">

					<div className="abouttext2"> In the busy, polluted world of today,
					it's never been more important to escape into nature.
					 <br/> The rejuvenating effects are felt in mind, body and spirit.<br/><br/>	

					<span style={{fontWeight: 'bold'}}>But one can't just waltz out the door and into the elements... </span><br/><br/>

					To truly enjoy the benefits, preparation is required...<br/>
					Rain, wind, thunderstorms, snowstorms... can all ruin your lovely day out.<br/><br/>
					Well with Cubby Cabins you can nip inside, stick the kettle on, put your feet up<br/>
					and the sounds of the raindrops will be music to your ears.

					
					 </div>
					 <div className="quotewrapper2"><div className="namewrapper"> The earth has music for those who listen <br/> <br/>- William Shakespeare</div> 
					 </div>

		</div>
		
<br/><ResponsiveGallery /> <br/>
	<div className="aboutgrid2">
					<div className="abouttext2 second">  

					Cubby Cabins aren't just for those looking to relax.
					They can be a hub of productivity too.<br/><br/>
					Many of the great minds found inspiration in nature.
					Einstein, Shakespeare, Picasso, Da Vinci...
					Their most brilliant ideas came from time in the wilderness.<br/><br/>
					Having time alone to your thoughts, free of distraction
					is a rare and valuable commodity in the modern world.<br/><br/>
					So come try a cabin for yourself, and see what happens.
					You might find that Eureka moment, or you might just find <em>yourself</em>.<br/><br/>
					(And you don't have to get wet in the process!)

					 </div>
					 <div className="quotewrapper2"><div className="namewrapper pablo"> Without great solitude, no great work is possible <br/> <br/>- Pablo Picasso</div> 
					 </div>

		</div>

		<img className="einstein" src={einstein}/>
		<img id="einsteinmob" src={einsteinmob}/>



</div>
</React.Fragment>
		)

}