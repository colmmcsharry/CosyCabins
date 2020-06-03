import React from 'react'
import ReactDOM from 'react-dom';
import phonebrain from './phonebrain.jpg'
import freelanceworkers from './freelanceworkers.jpg'
import couples from './couples.jpg'
import marshmallow from './marshmallow.jpg'



export default function ResponsiveGallery (){

return (
	<React.Fragment>
			<h2>Some of our fans</h2>
			<div className="responsive">
			  <div className="gallery">
			    
			      <img src={freelanceworkers} alt="Cinque Terre" width="600" height="400"/>
			    
			    <div className="desc">Freelance workers</div>
			  </div>
			</div>


			<div className="responsive">
			  <div className="gallery">
			    
			      <img src={couples} alt="" width="600" height="400"/>
			    
			    <div className="desc">Couples</div>
			  </div>
			</div>

			<div className="responsive">
			  <div className="gallery">
			    
			      <img src={marshmallow} alt="" width="600" height="400"/>
			    
			    <div className="desc">Marshmallow enthusiasts</div>
			  </div>
			</div>

			<div className="responsive">
			  <div className="gallery">
			    
			      <img src={phonebrain} alt="" width="600" height="400"/>
			    
			    <div className="desc">Deep thinkers
			  </div>
			</div>
</div>
			<div className="clearfix"></div>
</React.Fragment>

)
}