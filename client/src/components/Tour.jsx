import React from "react";
import { useHistory } from "react-router-dom";
import { toursDB } from "../database.js";
import styled from "styled-components";

const Tour = ({ tour_id, image_url, audio_url }) => {
  const history = useHistory();

  const handleViewClick = () => {
    history.push(`/tours/${tour_id}/pois`);
  };

  

  return (
    
    <div className="tour">
      <Container>
      <header>
        <h1> Start Your Tour {tour_id} </h1>
      </header>
      </Container>
      <Container>
      <main>
      
      {/* <p className="list-tour-name">
        <b>Start Your Tour</b> {tour_id}
      </p> */}
      <StyledButton onClick={handleViewClick}> Tour {tour_id}</StyledButton>
      </main>
      </Container>
      
    </div>
    
    
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-text: center;
`;

const StyledButton = styled.button`
    background-color: #21618c;
    font-size: 32px;
    color: white;
    min-width: 50px;
    min-height: 50px;
    `;

export default Tour;