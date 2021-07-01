import React from "react";
import styled from "styled-components";
import { toursDB } from "../database.js";
import SelectTour from "../components/SelectTour";

function Tours({ callbackFunction }) {
  return (
    <div>
      <Container>
        {/* <h1>Select your tour...</h1> */}
        {/* {toursDB[0].image_url} */}

        <TourPicture
          src={
            "https://images.unsplash.com/photo-1503377235941-5c4400135188?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
          }
          alt={toursDB[0].poi_id}
        ></TourPicture>
        <SelectHeader>Select your tour...</SelectHeader>

        {toursDB &&
          toursDB.map((tour) => {
            return (
              <SelectTour
                id={tour.id}
                key={tour.id}
                tour_name={tour.name}
                image_url={tour.image_url}
                callbackFunction={callbackFunction}
              />
            );
          })}
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectHeader = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 35px;
  font-weight: bolder;
  color: rgb(40, 116, 166);
`;

const TourPicture = styled.img`
  display: flex;
  width: 80%;
  height: auto;
  margin-top: 20px;
`;

export default Tours;
