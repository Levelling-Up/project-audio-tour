// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UseTours from "./Hooks/useTours1.jsx";
import Tour from "./components/Tour.jsx";
import PoiPage from "./components/PoiPage1.jsx";
import "./icons.js";
import Navbar from './components/Navbar.jsx';
import Welcome from "./screens/Welcome.jsx";
import Login from "./screens/Login.jsx";
import Tours from "./screens/Tours.jsx";
import End from "./screens/End.jsx";
import Poi from "./screens/Poi.jsx";
import Pois from "./screens/Pois.jsx";

function App() {
  const { tours } = UseTours();
  const addr = String(tours[0].image_url);
  //console.log(addr);
  const [language, setLanguage] = useState('english')
  const handleLanguage = (lang) => {
    setLanguage(lang);
    console.log(language);
  }
  const [tour_id, setTour_id] = useState()
  const callbackFunction = (childData) => {

    setTour_id(childData)
    
  }
  console.log(tour_id)
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
          <Tours language = {language} callbackFunction = {callbackFunction}/>
        </Route>

        <Route path="/tours/:id" exact>
          <Tour language = {language} tour_id = {tour_id} />
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
