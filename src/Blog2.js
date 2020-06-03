import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Cabin from './Cabin.js'
import { dublinphotos } from './photos.js'
import nophone from './nophone.jpg'



class Blog2 extends Component {
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
        <h1>How a digital detox rewires your brain</h1> <br/>
        <p>In this blog we talk about how getting away from screens presses the reset button on your brain.</p> <br/>
        <button className="lined thin" onClick={this.onToggleVisibility}>
          {visibility ? "Hide blog" : "Show blog"}
        </button>
        {visibility && <div className="blogtext"> Here be the blog with pics and stuff <br/>
          <img src={nophone} /> <br/>


          Here be the blog with pics and stuff <br/>
          Here be the blog with pics and stuff<br/>
          Here be the blog with pics and stuff<br/>
          Here be the blog with pics and stuff<br/>
          Here be the blog with pics and stuff<br/>




        </div>   }

      </div>
    );
  }
}

export default Blog2;