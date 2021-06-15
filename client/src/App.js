// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import UseTours1 from "./Hooks/useTours1.jsx";
import Tour from "./Components/Tour.jsx";
import PoiPage from "./Components/PoiPage.jsx";
import "./icons.js";
// import Welcome from "./screens/Welcome";
// import Tracks from "./screens/Tracks";
// import Select from "./screens/Select";
// import StartTour from "./screens/StartTour";
// import Track from "./screens/Track";
// import Access from "./screens/Access";
// import EndTour from "./screens/EndTour";



function App() {
  const { tours } = UseTours1();
  const addr = String(tours[0].image_url);
  console.log(addr);

  return (
    // <Router>
    //   <Route path="/" exact component={Welcome} />
    //   <Route path="/welcome/" exact component={Welcome} />
    //   <Route path="/tracks/" exact component={Tracks} />
    //   <Route path="/start/" exact component={StartTour} />
    //   <Route path="/track/" exact component={Track} />
    //   <Route path="/access/" exact component={Access} />
    //   <Route path="/end/" exact component={EndTour} />
    //   <Route path="/select/" exact component={Select}/>
    // </Router>
    <Router>
    <div className="App">
      <nav></nav>

      <Switch>
        <Route path="/" exact>
          <h1>Hello CodeSandbox</h1>
          {tours[0].image_url}
        </Route>
        <Route path="/tours/poi/:id">
          <PoiPage />
        </Route>

        <Route path="/tours">
          <header>
            <h1>Select your tour</h1>
            {tours[0].image_url}

            <p>
              <img
                src={
                  "https://images.unsplash.com/photo-1503377235941-5c4400135188?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                }
                alt={tours[0].poi_id}
                width="300"
                height="300"
              />
            </p>

            <h2>Start editing to see some magic happen!</h2>

            <h1>Select a tour</h1>
          </header>
          <main>
            {tours &&
              tours.map((tour) => {
                return (
                  <Tour
                    id={tour.id}
                    key={tour.id}
                    image_url={tour.image_url}
                    audio_url={tour.audio_url}
                  />
                );
              })}
          </main>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
