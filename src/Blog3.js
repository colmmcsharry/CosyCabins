import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Cabin from './Cabin.js'
import { dublinphotos } from './photos.js'
import enviro from './pics/enviro.jpg'



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
        {visibility && <div className="blogtext">
         <img src={enviro} /> <br/>
        All our cabins are handcrafted to be 100 percent off the grid and environmentally friendly. 
        Part of this is to provide a toilet for composting. Except that there is no flush, it is identical to the one at home. 
        Although solids are retained and dried underneath the device, liquids are redirected. Our structures 
        are odorless, but bear in mind that you're in the desert! Please send us a call if there are any problems.
         Air freshener, just in case,
         <br/><br/>
         It's not a hotel here. Think off the grid adventure, not chocolate on the bed. Our cabins are 100% solar powered and are designed
          to be not on the landscape, but in it, which means that we do everything we can to keep the footprint as small as possible. 
          There is no heating or air conditioning. But, for large temperature 
         fluctuations, each cabin is specially insulated, designed for cross-breeze in the hotter months, equipped with a small isolation system.

          




        </div>   }

      </div>
    );
  }
}

export default Blog3;