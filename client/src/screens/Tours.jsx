import React, { useContext } from "react";
import styled from "styled-components";
import SelectTour from "../components/SelectTour";
import useTours from '../Hooks/useTours'
import { UserContext } from "../UserContext";

function Tours({ handleTourId }) {
 
  const { user } = useContext(UserContext);
  const { tours } = useTours()
  
  if(!user){return(<><h2>No User!</h2></>)}
  
  return (
    <div>
      <Container>
        {/* <h1>Select your tour...</h1> */}
        {/* {toursDB[0].image_url} */}
        <SelectHeader>Select your tour...</SelectHeader>
        <ToursContainer>
        {tours &&
          tours.map((tour) => {
            console.log(tour)
            return (
              <SelectTour
                id={tour.id}
                key={tour.id}
                tour_name={tour.name}
                imageUrl={tour.imageUrl}
                handleTourId={handleTourId}
              />
            );
          })}
          </ToursContainer>
      </Container>
    </div>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
`;

const ToursContainer = styled.div`
  height: 70qvh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  
`;
// overflow: auto;

const SelectHeader = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 35px;
  font-weight: bolder;
  color: rgb(40, 116, 166);
`;

export default Tours;
