import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import styled from "styled-components";
import { useHistory } from "react-router-dom"
import { poisDB, toursDB } from "../database.js";
import { listPointOfInterests } from '../graphql/queries';

function Pois(props) {
  const [ pointsOfInterest, setPointsOfInterest ] = useState([]);

  const tour = toursDB[0].name;
  const history = useHistory()

  useEffect(() => {

    const fetchPointsOfInterest = async () => {
      try {
        const result = await API.graphql(graphqlOperation(listPointOfInterests));
        if (result.data){
          setPointsOfInterest(result.data.listPointOfInterests.items)
        }else{
          setPointsOfInterest([])
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchPointsOfInterest();
  }, [])

  const handleClick = (id) => {
    history.push(`/tours/${tour.id}/pois/${id}`)
  }

  return (
    <Container>
      <Title>{tour}</Title>
      <Grid>
        {pointsOfInterest.map((poi, i) => (
          <TrackContainer key={poi.id}>
            <POIImage src={poi.imageUrl} onClick={() => {handleClick(poi.id)}}></POIImage>
            <TrackName>{poi.name}</TrackName>
          </TrackContainer>
        ))}
      </Grid>
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

const Grid = styled.div`
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

export default Pois;