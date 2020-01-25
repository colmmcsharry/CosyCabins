import React from 'react';
import { BrowserRouter as HashRouter} from "react-router-dom";
import routes from './routes.js'
/*import Gallery from 'react-grid-gallery';*/
import './App.css'


import Navbar from "./Navbar.js";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import SocialFollow from './SocialFollow.js'






function App() {
   // const  myims = images.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} />) 



  return (

    <HashRouter basename='/'>
 <React.Fragment>

    <div className="App">
    <Navbar />
   		{routes}

<SocialFollow />

</div> {/*this one is app div*/}


   </React.Fragment>
   </HashRouter>
  );

}

export default App;






