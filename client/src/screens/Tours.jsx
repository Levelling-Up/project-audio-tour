import React from "react";
import styled from "styled-components";
import IcosArrowDown from "../components/IcosArrowDown";
import { toursDB } from "../database.js";
import Tour from "../components/Tour"

function Tours(props) {
  return (
    <div>
    <header>
    <h1>Select your tour</h1>
    {toursDB[0].image_url}

    <p>
      <img
        src={
          "https://images.unsplash.com/photo-1503377235941-5c4400135188?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
        }
        alt={toursDB[0].poi_id}
        width="300"
        height="300"
      />
    </p>
    <h1>Select a tour</h1>
  </header>
  <main>
    {toursDB &&
      toursDB.map((tour) => {
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
  </div>
  )
}

export default Tours;