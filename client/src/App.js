import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import Welcome from "./screens/Welcome";
import Tracks from "./screens/Tracks";
import Select from "./screens/Select";
import StartTour from "./screens/StartTour";
import Track from "./screens/Track";
import Access from "./screens/Access";
import EndTour from "./screens/EndTour";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Welcome} />
      <Route path="/welcome/" exact component={Welcome} />
      <Route path="/tracks/" exact component={Tracks} />
      <Route path="/start/" exact component={StartTour} />
      <Route path="/track/" exact component={Track} />
      <Route path="/access/" exact component={Access} />
      <Route path="/end/" exact component={EndTour} />
      <Route path="/select/" exact component={Select}/>
    </Router>
  );
}

export default App;
