import React from "react";
import ReactWeather, { useOpenWeather } from 'react-open-weather';


export default function Forecast(props) {





const { data, isLoading, errorMessage } = useOpenWeather({
    key: process.env.REACT_APP_API_KEY,
    lat: props.lat,
    lon: props.lon,
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });

const customStyles = {
  fontFamily:  'Helvetica, sans-serif',
  gradientStart:  '#FEFFEF',
  gradientMid:  '#FEFFEF',
  gradientEnd:  '#FEFFEF',
  locationFontColor:  'black',
  todayTempFontColor:  'black',
  todayDateFontColor:  'black',
  todayRangeFontColor:  'black',
  todayDescFontColor:  'black',
  todayInfoFontColor:  'black',
  todayIconColor:  '#FFF',
  forecastBackgroundColor:  '#FEFFEF'
};

   
return (

		<div className="forecastcontainer">
      <h2 className="weatherh2">Current Weather</h2>
      <ReactWeather
      theme={customStyles}
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel={props.locationlbl}
      unitsLabels={{ temperature: '°C', windSpeed: 'Km/h' }}
      showForecast  
    />
</div>


	)



}