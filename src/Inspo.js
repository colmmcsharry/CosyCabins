import React,{useState} from "react";
import Quotable from './Quotes.js';
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

  const Tedarray = [
    naturemov1,naturemov2,naturemov3,naturemov4, naturemov5,naturemov6,naturemov7,naturemov8,naturemov9, naturemov10,naturemov11,naturemov12
  ]

/*this one just chooses the one to show on startup*/
var randomstart = Math.floor(Math.random() * 10);
  // 0 - 10 are the options here for useState
const [activeObj, setActiveObj] = useState(randomstart);

function next(){
  let newactiveObj = activeObj + 1;
  if(newactiveObj === Tedarray.length){
    newactiveObj = 0
  }
  setActiveObj(newactiveObj)
}

   
      return ( 


    <React.Fragment>     




<div id="videohero">
    <div className="texture"></div>
        <video autoPlay muted>
        <source src={naturevideo} type="video/mp4"/>
        </video>


    
        <Quotable/>
     
   
</div>


<div className="inspocontent">
    <img className="listimg" src={Tedarray[activeObj]} width="100%" height="100%" />
    <button className="teabut" onClick={next} id="cuppa">
    Go on!
    </button>
 </div>


    </React.Fragment>
)
}
