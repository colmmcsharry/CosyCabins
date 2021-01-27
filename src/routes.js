import React from "react";
import { Route } from 'react-router-dom'
import Carousel  from './Carousel'
import Cabin from './Cabin.js'
import Landing from './Landing.js'
import Lightbox from './Lightbox.js'
import Blogs from './Blogs.js'
import About from './About.js'
import Contact from './Contact.js'

export default [


			<Route key="home" exact path="/Testproj" component={Landing} />,         
            <Route key="carousel" path="/carousel" component={Carousel} />,       
			<Route key="landing" path="/landing" component={Landing} />,      
			<Route key="dublin" path="/dublin" render={(props) => <Lightbox {...props} place="Dublin" />}    />,
			<Route key="galway" path="/galway" render={(props) => <Lightbox {...props} place="Galway"   />}   />,
			<Route key="kerry" path="/kerry" render={(props) => <Lightbox {...props} place="Kerry"  />}   />,
			<Route key="cork" path="/cork" render={(props) => <Lightbox {...props} place="Cork"  />}   />,
			 <Route key="belfast" path="/belfast" render={(props) => <Lightbox {...props} place="Belfast"  />}   />,
			<Route key="blogs" path="/blogs" component={Blogs} />, 
			<Route key="about" path="/about" component={About} />,  
			<Route key="contact" path='/contact' component={Contact} />



			

			
            ]