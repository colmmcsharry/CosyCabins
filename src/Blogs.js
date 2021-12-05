import React, { useEffect } from "react";
import Blog from './Blog.js'
import Blog2 from './Blog2.js'
import Blog3 from './Blog3.js'



export default function Blogs  () {

useEffect(() => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
  }, []);

	 return ( 

			<div className="blogscontainer">

			<Blog />
			<br/>
			<Blog2 />
<br/>
			<Blog3 />



			</div>


		)

  
}
