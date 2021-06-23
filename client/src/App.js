// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import UseTours from "./Hooks/useTours1.jsx";
import Tour from "./components/Tour1.jsx";
import PoiPage from "./components/PoiPage1.jsx";
import "./icons.js";
import Navbar from './components/Navbar.jsx';
import Welcome from "./screens/Welcome.jsx";
import Login from "./screens/Login.jsx";
import Tours from "./components/Tours.jsx";
import End from "./screens/End.jsx";
import Poi from "./screens/Poi.jsx";
import Pois from "./screens/Pois.jsx";


// import Welcome from "./screens/Welcome";
// import Tracks from "./screens/Tracks";
// import Select from "./screens/Select";
// import StartTour from "./screens/StartTour";
// import Track from "./screens/Track";
// import Access from "./screens/Access";
// import EndTour from "./screens/EndTour";



function App() {
  const { tours } = UseTours();
  const addr = String(tours[0].image_url);
  //console.log(addr);
  const [language, setLanguage] = useState('English')
  const handleLanguage = (lang) => {
    setLanguage(lang);
    console.log(language);
  }

  return (
    
    <Router>
      <div className="App">
      <Navbar language = {language} handleLanguage = {handleLanguage}/> 

      <Switch>

        <Route path="/" exact>
          <Welcome language = {language} />
        </Route>

        <Route path="/login" exact>
          <Login language = {language} />
        </Route>

        <Route path="/tours" exact>
          <Tours language = {language} />
        </Route>

        <Route path="/tours/:id" exact>
          <Tour language = {language} />
        </Route>

        <Route path="/tours/:id/pois" exact>
          <Pois language = {language} />
        </Route>

        <Route path="/tours/:tour_id/pois/:id">
          <Poi language = {language} />
        </Route>

        <Route path="/end">
          <End language = {language} />
        </Route>

      </Switch>
    </div>
  </Router>
  );
}

export default App;
