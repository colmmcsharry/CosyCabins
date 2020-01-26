import React from 'react'
import ReactDOM from 'react-dom';
import phonebrain from './phonebrain.jpg'




export default function ResponsiveGallery (){

return (
	<React.Fragment>

			<div className="responsive">
			  <div className="gallery">
			    
			      <img src={phonebrain} alt="Cinque Terre" width="600" height="400"/>
			    
			    <div className="desc">first</div>
			  </div>
			</div>


			<div className="responsive">
			  <div className="gallery">
			    
			      <img src={phonebrain} alt="" width="600" height="400"/>
			    
			    <div className="desc">Second</div>
			  </div>
			</div>

			<div className="responsive">
			  <div className="gallery">
			    
			      <img src={phonebrain} alt="" width="600" height="400"/>
			    
			    <div className="desc">Third</div>
			  </div>
			</div>

			<div className="responsive">
			  <div className="gallery">
			    
			      <img src={phonebrain} alt="" width="600" height="400"/>
			    
			    <div className="desc">fourth
			  </div>
			</div>
</div>
			<div className="clearfix"></div>
</React.Fragment>

)
}