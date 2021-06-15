import React from "react";
import styled from "styled-components";
import { poisDB, toursDB } from "../database.js";
import Navbar from "./../components/Navbar";

function Tracks(props) {
  const tour = toursDB[0].name;
  const pois = poisDB;
  const language = "english";

  return (
    <Container>
      <Navbar />
      <Title>{tour}</Title>
      <Row>
        {pois.map((poi, i) => (
          <TrackContainer>
            <POIImage src={poi.image_url}></POIImage>
            <TrackName>{poi.name}</TrackName>
          </TrackContainer>
        ))}
      </Row>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(29,27,37,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
`;

const TrackContainer = styled.div`
  height: 136px;
  width: 168px;
  flex-direction: column;
  display: flex;
  margin: 8px;
`;

const POIImage = styled.img`
  height: 107px;
  width: 168px;
  border-radius: 4px;
  background-color: rgba(0,0,0,0.3);
`;

const TrackName = styled.span`
  font-family: Arial;
  background-color: transparent;
  color: rgba(184,180,187,1);
  font-size: 14px;
  margin-top: 9px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  overflow: auto;
`;

const Title = styled.div`
  font-family: Arial;
  background-color: transparent;
  text-align: center;
  color: rgba(255,255,255,1);
  font-size: 24px;
  margin-top: 8px;
  margin-bottom: 12px;
`;

export default Tracks;