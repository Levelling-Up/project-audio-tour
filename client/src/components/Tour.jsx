import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Tour = ({ language, tour_id, imageUrl, tour_name }) => {
  const history = useHistory();

  const handleViewClick = () => {
    history.push(`/tours/${tour_id}/pois`);
  };

  return (
    <Container>

      <TourImg src={imageUrl}></TourImg>
      <StartText>Start Your Tour: {tour_name}</StartText>

      

      <StyledButton onClick={handleViewClick}> Start {tour_name}</StyledButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StartText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  font-size: 35px;
  font-weight: bolder;
  color: rgb(40, 116, 166);
`;

const StyledButton = styled.button`
  background-color: rgb(40, 116, 166);
  color: white;
  border: none;
  font-size: 20px;
  font-weight: bolder;
  padding: 10px;
  border-radius: 50px;
  margin-top: 40px;
`;

const TourImg = styled.img`
  margin-top: 40px;
  width: 20%;
  height: 20%
  border-radius: 4px;
  
  }
  `;

export default Tour;
