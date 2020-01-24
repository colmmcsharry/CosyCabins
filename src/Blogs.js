import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Blog from './Blog.js'
import Blog2 from './Blog2.js'
import Blog3 from './Blog3.js'



export default class Blogs extends Component {

componentDidMount() {
    window.scrollTo(0, 0);
};

	render() { return ( 

			<div className="blogscontainer">

			<Blog />
			<br/>
			<Blog2 />
<br/>
			<Blog3 />



			</div>


		)

  }
}
