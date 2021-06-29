import React from "react";
import styled from "styled-components";
import { toursDB } from "../database.js";
import SelectTour from "../components/SelectTour"

function Tours({callbackFunction}) {
  return (
    
    <div>
      <Container>
    <header>
    
      {/* <h1>Select your tour...</h1> */}
    {/* {toursDB[0].image_url} */}

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
      <h1>Select your tour...</h1>
      
    </header>
    </Container>
    <main>

    {toursDB &&
      toursDB.map((tour) => {
        return (
          <SelectTour
            id={tour.id}
            key={tour.id}
            tour_name={tour.name}
            image_url={tour.image_url}
            callbackFunction = {callbackFunction}
            
          />
        );
      })}
      
  </main>
  </div>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-text: center;
`;

export default Tours;