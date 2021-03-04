import React, {useState, useEffect } from 'react';
import { BrowserRouter as HashRouter} from "react-router-dom";
import routes from './routes.js'
/*import Gallery from 'react-grid-gallery';*/
import './App.css'
// import Weather from './Weather.js'
import Weather from './Weather.js'
import Navbar from "./Navbar.js";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import SocialFollow from './SocialFollow.js'
// import Weather from './Weather.js'
import countries from 'i18n-iso-countries';

countries.registerLocale(require('i18n-iso-countries/langs/en.json'));





function App() {
   // const  myims = images.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} />) 
const [count, setCount] = useState(9);

  return (

    <HashRouter basename='/'>
 <React.Fragment>

    <div className="App">
    <Navbar />
   		{routes}

<SocialFollow />




  </div> {/*main app div*/}







   </React.Fragment>
   </HashRouter>
  );

}

export default App;






