import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Cabin from './Cabin.js'
import { dublinphotos } from './photos.js'
import nophone from './pics/nophone.jpg'



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
        {visibility && <div className="blogtext">
          <img src={nophone} /> <br/>

While the internet has obviously opened wide vistas of information, generated millions of new businesses, and connected the world more closely together, it's still a double-edged sword, especially when it comes to training your brain.

According to extensive research, over-exposure to the internet: <br/><br/>

<ul><b><em>
<li>Makes it more difficult to remember facts</li>
<li>Can create addictive behavior, especially in gamers</li>
<li>Can trigger feelings of jealousy and loneliness</li>
<li>Increases suicide risk, especially in teenagers</li>
<li>Makes you generally less empathetic</li>
<li>Can result in chronic insomnia</li>
<li>Distracts you from deep thinking and analysis</li>
</em></b>
</ul>
Because these secondary effects are obviously undesirable, some psychologists have begun recommending "digital detox" to reset your brain and return it to normal functioning.

FastCompany.com recently described an experiment where a team of neuroscientists were embedded with a group of successful entrepreneurs at a retreat in the Moroccan desert with no internet access. Here's what happened:
<br/><br/>
<ul><b><em>
<li>The amount of eye contact increased. Participants looked up at other people rather than down at their screens, and as a result made better and deeper personal connections, making it easier to develop friendships.</li>
<li>Postures immediately improved. People stood up straighter, pushed their shoulders back, and aligned their heads with their spines, which decreased back and body pain, and improved digestion. It also made people seem more approachable.</li>
<li>Conversations became more engaging. Since participants weren't able to access Google (or answer email, texts, etc.), they were forced to convey more personal experience and anecdotes, further deepening the experience of being with others.</li>
<li>People remembered more. Because participants were "more present" in conversations, they were more likely to remember what was said, especially details about other people's lives which otherwise would have been lost in the flood of online information.</li>
<li>Sleep patterns improved. Most screens emit "blue light," which signals the body to hold back on releasing melatonin, the naturally-occurring chemical that tells your brain that you're ready to sleep.</li>
<li>Many made "breakthrough" decisions. Without the constant distraction of the internet, participants were able to think more deeply and make life decisions that they'd been putting off--and also believe they had the willpower to follow through.</li>
</em></b></ul>
While the effects above developed over a period of days, there's plenty of evidence that even a 24-hour detox can have a huge positive impact on how your brain functions. Ideally, a detox should be done with others, especially family and friends. Some people have characterized the experiences as literally "life-changing."




        </div>   }

      </div>
    );
  }
}

export default Blog2;