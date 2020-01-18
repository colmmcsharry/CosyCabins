import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Cabin from './Cabin.js'
import { dublinphotos } from './photos.js'




class Blog extends Component {
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
        <h1>The benefits of Time in Nature</h1> <br/>
        <p>In this blog we talk about the many benefits of time spent in nature. These include relaxation, happiness, and so much more.</p> <br/>
        <button className="lined thin" onClick={this.onToggleVisibility}>
          {visibility ? "Hide blog" : "Show blog"}
        </button>
        {visibility && <div className="blogtext">
          <img src="https://mensvariety.com/wp-content/uploads/2017/09/arrested-woods-678x381.jpg" />

          Spending at least two hours in nature per week can promote health and well-being.

A study published in the journal Scientific Reports on Thursday found that people can benefit from spending at least 120 minutes a week in natural environments.
 Researchers found that people who met the threshold reported better health and higher psychological well-being than people who did not spend any time in nature during the week.

<br/> <br/>
No benefits were observed in people who spent fewer than two hours outdoors. Spending time in natural environments includes visiting town parks, local urban greenspaces, woodlands and beaches.
<br/> <br/>
The study found that benefits were observed in people whether they spent a continuous two hours in nature or whether the time was accumulated through multiple shorter visits throughout the week. 
The health effects at the two-hour threshold were observed across all participants regardless of age, gender, ethnicity, socio-economic status, medical conditions or occupation.
<br/> <br/>
Dr. Mathew White, lead author, said in a press release that 120 minutes "is hopefully a realistic target for many people, especially given that it can be spread over an entire week to get the benefit."

<br/> <br/>
Terry Hartig, co-author, said in the release that there are many benefits people can get from spending time outdoors, and health care professionals should recommend it to patients.
<br/> <br/>
"There are many reasons why spending time in nature may be good for health and wellbeing, including getting perspective on life circumstances, reducing stress and enjoying quality time with friends and family," Hartig said. 
"The current findings offer valuable support to health practitioners in making recommendations about spending time in nature to promote basic health and wellbeing, similar to guidelines for weekly physical activity."





        </div>   }

      </div>
    );
  }
}

export default Blog;
