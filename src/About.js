import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import stress from './stress.jpg'
import ireland from './Irelandsharp.png'
import CouldbeYou from './CouldbeYou.png'
import einstein from './einstein.jpg'
import phonebrain from './phonebrain.jpg'
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
		<div id="mainhighcontainer" >
		<div id="highcontainer" >
			<div id="could">This could be you <br/>{' \u2199 '}</div>
		</div>
	</div>		

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


		<figure><img className="ireland" src={ireland} height='400px' width= '400px'/><figcaption style={{position:'relative', bottom: '2rem',fontFamily:'Quicksand', fontSize:'.9rem'}}>No matter where you live in Ireland
		 you can find a Cubby Cabin within an hour's drive</figcaption></figure>
			<br/>
		
		<p style= {{fontFamily:'Quicksand', fontSize:'1rem'}}> Our cabins are easily booked, easily accessed and easily affordable!</p><br/>	
	

	
		<br/> <br/>
			<h2>Who we're for, and why!</h2>
		<div className="aboutgrid2">

					<div className="abouttext2"> In the busy world of today<br/>
					it's never been more important to escape into nature.<br/><br/>	
					Study after study shows the healing power of time in nature;<br/>  
					reducing stress and sickness, increasing self-esteem, improved sleep... <br/><br/>

					But one can't just waltz out the door and into the elements... <br/><br/>

					To truly enjoy the benefits, you need to be prepared.<br/>
					Rain, wind, thunderstorms, snowstorms... can all ruin your lovely day out.<br/><br/>
					Well with Cubby Cabins you can nip inside, stick the kettle on, put your feet up<br/>
					and the sounds of the raindrops will be music to your ears.

					
					 </div>
					 <div className="quotewrapper2"><div className="namewrapper"> <span>The earth has music for those who listen <br/></span> <br/>- William Shakespeare</div> 
					 </div>

		</div>
		<img className="phonebrain" src={phonebrain}/>
<br/> <br/>
	<div className="aboutgrid2">
					<div className="abouttext2 second">  

					Cubby Cabins aren't just for those looking to relax.<br/>
					They can be a hub of productivity too.<br/><br/>
					 Many of the great minds found inspiration in nature.<br/>
					Einstein, Shakespeare, Picasso, Da Vinci...<br/>
					Their most brilliant ideas came from time in the wilderness<br/><br/>
					Having time alone to your thoughts, free of distraction <br/>
					is a rare and valuable commodity in the modern world<br/><br/>
					So come try a cabin for yourself, and see what happens.<br/>
					You might find that Eureka moment, or you might just find yourself.<br/><br/>
					And you don't have to get wet in the process!

					 </div>
					 <div className="quotewrapper2"><div className="namewrapper"> <span>Without great solitude, no great work is possible <br/></span> <br/>- Pablo Picasso</div> 
					 </div>

		</div>

		<img className="einstein" src={einstein}/>


<ResponsiveGallery />

</div>
</React.Fragment>
		)

}