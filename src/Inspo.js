import React,{useState} from "react";
import Quotable from './Quotes.js';
import Spotify from './Spotify.js';
import naturemov1 from './pics/naturemov1.jpg'
import naturemov2 from './pics/naturemov1.jpg'
import naturemov3 from './pics/naturemov3.jpg'
import naturemov4 from './pics/naturemov4.jpg'
import naturemov5 from './pics/naturemov5.jpg'
import naturemov6 from './pics/naturemov6.jpg'
import naturemov7 from './pics/naturemov7.jpg'
import naturemov8 from './pics/naturemov8.jpg'
import naturemov9 from './pics/naturemov9.jpg'
import naturemov10 from './pics/naturemov10.jpg'
import naturemov11 from './pics/naturemov11.jpg'
import naturemov12 from './pics/naturemov12.jpg'
import naturevideo from './pics/mutedvid.mp4'



export default function Father(){

  const Movarray = [
    naturemov1,naturemov2,naturemov3,naturemov4, naturemov5,naturemov6,naturemov7,naturemov8,naturemov9, naturemov10,naturemov11,naturemov12
  ]

/*this one just chooses the one to show on startup*/
var randomstart = Math.floor(Math.random() * 10);
  // 0 - 10 are the options here for useState
const [activeObj, setActiveObj] = useState(randomstart);

function next(){
  let newactiveObj = activeObj + 1;
  if(newactiveObj === Movarray.length){
    newactiveObj = 0
  }
  setActiveObj(newactiveObj)
}

   
      return ( 


    <React.Fragment>     



{/* header section */}
<div id="videohero">
    <div className="texture"></div>
        <video autoPlay muted loop>
        <source src={naturevideo} type="video/mp4"/>
     </video>
        <Quotable/>
    <a className="inspolink" href="#insposection"> 
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
     </a> 
</div>


<div className="biginspowrapper">
<h1 className="unwindh1" id="insposection">Let Us Help You Unwind</h1>
<p className="unwindsub">A curated selection of music and movies that will help you forget about city life!
</p>
    <div className="inspocontainer">
    <Spotify />

            <div className="inspocontent" >
            <button className="quotebutton filmbut" onClick={next} id="cuppa">
                Get Movies!
                </button>
                <img className="listimg" src={Movarray[activeObj]} width="100%" height="100%" />
                
            </div>
    </div> 
 </div>          

 


    </React.Fragment>
)
}
