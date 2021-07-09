// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import React, { useState } from "react";
import UserContext from "./UserContext.js"
import Amplify, { Auth } from "@aws-amplify/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import UseTours from "./Hooks/useTours1.jsx";
import Tour from "./components/Tour.jsx";
//import PoiPage from "./components/PoiPage1.jsx";
import "./icons.js";
import Navbar from './components/Navbar.jsx';
import Welcome from "./screens/Welcome.jsx";
import Login from "./screens/Login.jsx";
import Tours from "./screens/Tours.jsx";
import End from "./screens/End.jsx";
import Poi from "./screens/Poi.jsx";
import Pois from "./screens/Pois.jsx";
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


function App() {
  //const addr = String(tours[0].image_url);
  //console.log(addr);
  const [user, setUser] = useState(null)
  const [language, setLanguage] = useState('english')
  const handleLanguage = (lang) => {
    setLanguage(lang);
    console.log(language);
  }
  const [tour_id, setTour_id] = useState("")
  const[imageUrl, setImageUrl] = useState("")
  const[tour_name, setTour_name] = useState("")
  const [pois, setPois] = useState("")
  const [poiId, setPoiId] = useState("")

  const handleTourId = (id, imageUrl, tour_name) => {
    setTour_id(id)
    setImageUrl(imageUrl)
    setTour_name(tour_name)
    //this is where we fetch all the data for the rest of the app
    //Fetch 1: get the Tour and save it in state
    //Fetch 2: get the Pois for that tour and save it in state
    setPois()
    //Fetch 3: get all the tracks in the correct language for the pois of the tour and save in state
    console.log(id)
  }

  const handlePoiId = (id) => {
    setPoiId(id)
    console.log(id)
  }
  
  return (
    
    <Router>
      <div className="App">
      <Navbar language = {language} handleLanguage = {handleLanguage}/> 

      <Switch>

        <Route path="/" exact>
          <Welcome language = {language} />
        </Route>
        <UserContext.Provider value={{user, setUser}}>
          <Route path="/login" exact>
            <Login language = {language} />
          </Route>
        
          <Route path="/tours" exact>
            <Tours language = {language} handleTourId = {handleTourId}/>
          </Route>

          <Route path="/tours/:id" exact>
            <Tour language = {language} tour_id = {tour_id} imageUrl = {imageUrl} tour_name = {tour_name} />
          </Route>

          <Route path="/tours/:id/pois" exact>
            <Pois language = {language} tour_id = {tour_id} handlePoiId = {handlePoiId}/>
          </Route>

          <Route path="/tours/:tour_id/pois/:id">
            <Poi language = {language} tour_id = {tour_id} poi_id = { poiId }/>
          </Route>

          <Route path="/end">
            <End language = {language} />
          </Route>
        </UserContext.Provider>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
