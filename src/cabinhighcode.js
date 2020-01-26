<div id="mainhighcontainer" >
		<div id="highcontainer" >
			<div id="could">This could be you <br/>{' \u2199 '}</div>
		</div>
	</div>		


	/*funky zoominout begins*/
#could {color:white;
  font-size:.8rem;
position:absolute; 
bottom:16%;
left:47%;
}

#mainhighcontainer
  { height:600px;
    width:800px;
    overflow: hidden;
     border: solid 3px #41403e;
   border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    position: relative;
    margin: auto;
  }
  #highcontainer
  { height:600px;
    width:800px;
    
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("./pics/cabinhigh.jpg");
   background-position: center;
  background-repeat: no-repeat;
  background-size: 800px 600px;  
    animation: zoomin 10s ease-in infinite;
  transition: all .5s ease-in-out;
  overflow: hidden;
    /* transform: scale(3.0); */
    /* transform: scale(1.0); */
    transform-origin: 50% 90%;
  }
  @keyframes zoomin {
  0% {transform: scale(1);}
  50% {transform: scale(2.9);}
  100% {transform: scale(1);}
} /*End of Zoom in Keyframes */

/*this is all the code for the cool cabin zooming thing*/