/*import React, {useState, useEffect } from 'react';


export default function Weather (props) {



// State
const [apiData, setApiData] = useState({});
const [state, setState] = useState('Belfast');


var placename = props.placeprop 


// API KEY AND URL
const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${placename},IE&appid=${apiKey}&units=metric`;



useEffect(() => {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => 
    	setApiData(data),);
    
}, [apiUrl]);




return (





<div className="weather">
      

      <div>
        {apiData.main ? (
          <div>
            <img
              src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
              alt="weather status icon"
            />

               <br/>
              {apiData.name}
              <br/>
              {apiData.main.temp}&deg; C
          </div>

        )

         : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
    


	)


}*/