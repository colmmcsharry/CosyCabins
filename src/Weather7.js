// import React, {useState, useEffect } from 'react';


// export default function Weather (props) {

// // State
// const [apiData, setApiData] = useState({});
// const [state, setState] = useState('Belfast');

// const fullData = useState([]);
// const dailyData = useState([])


// var placename = props.placeprop 


// // API KEY AND URL
// const apiKey = process.env.REACT_APP_API_KEY;
// const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${placename},IE&appid=${apiKey}&units=metric`;



// useEffect(() => {
//   fetch(apiUrl)

//     .then((res) => res.json())
//     .then(data => {
//       const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))

//       setState({
//         fullData: data.list,
//         dailyData: dailyData
//       }, () => console.log(state))

//     })
//   }

// );



// fetch(weatherURL)
//     .then(res => res.json())
//     .then(data => {
//       const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
//       this.setState({
//         fullData: data.list,
//         dailyData: dailyData
//       }, () => console.log(this.state))
//     })
//   }




/*
return (


<div className="weather">
 {apiData.list}     

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