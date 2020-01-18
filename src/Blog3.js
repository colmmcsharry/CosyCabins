import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Cabin from './Cabin.js'
import { dublinphotos } from './photos.js'




class Blog3 extends Component {
  state = {
    visibility: false,
    text: "oiii"
  };

  onToggleVisibility = () =>
    this.setState({ visibility: !this.state.visibility });

  render() {
    const { visibility } = this.state;

    return (
      <div className="blogclass">
        <h1>How our cabins are eco-friendly</h1> <br/>
        <p> See how our cabins are supporting local farmers, reducing pollution and saving energy by using natural resources...</p> <br/>
        <button className="lined thin" onClick={this.onToggleVisibility}>
          {visibility ? "Hide blog" : "Show blog"}
        </button>
        {visibility && <div className="blogtext">Hey. These are some details you can now see!! 
        Hey. These are some details you can now see!! Hey. These are some details you can now see!! 
        Hey. These are some details you can now see!! Hey. These are some details you can now see!! Hey.
         These are some details you can now see!! Hey. These are some details you can now see!!
         


          




        </div>   }

      </div>
    );
  }
}

export default Blog3;