import React from "react";
import { Route } from 'react-router-dom'
import Carousel  from './Carousel'
import Cabin from './Cabin.js'
import Landing from './Landing.js'
import Lightbox from './Lightbox.js'
import Blogs from './Blogs.js'

export default [


			<Route key="home" exact path="/Testproj" component={Landing} />,         
            <Route key="carousel" path="/carousel" component={Carousel} />,       
			<Route key="landing" path="/landing" component={Landing} />,      
			<Route key="dublin" path="/dublin" render={(props) => <Lightbox {...props} place="Dublin" />}    />,
			<Route key="blogs" path="/blogs" component={Blogs} />,  



			

			
            ]