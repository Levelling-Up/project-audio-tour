import React, { useEffect, useState, useContext } from "react";
import { API } from 'aws-amplify';
import styled from "styled-components";
import { useHistory } from "react-router-dom"
//import { poisDB, toursDB } from "../database.js";
import { listPointOfInterests } from '../graphql/queries';
import { UserContext } from "../UserContext";

function Pois({tour_id, language, tour_name, handlePoiId}) {
  const {user,setUser} = useContext(UserContext);
  const [ pointsOfInterest, setPointsOfInterest ] = useState([]);
  const [tour, setTour] = useState({});
  const history = useHistory()

 

  useEffect(() => {
    
    const fetchPointsOfInterest = async () => {
      // Query with filters, limits, and pagination
      let filter = {
        tourId: {
            eq: tour_id // filter for the current tour id
        }
      };
      try {
        const result = await API.graphql({ query: listPointOfInterests, variables: { filter: filter}});
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
  }, [tour_id] );

  if(!user){return(<><h2>No User!</h2></>)}

  const handleClick = (id) => {
    history.push(`/tours/${tour_id}/pois/${id}`)
  }

  return (
    <Container>
      <Title>{tour_name}</Title>
      <Grid>
        {pointsOfInterest.map((poi, i) => (
          <TrackContainer key={poi.id}>
            <POIImage src={poi.imageUrl} onClick={() => {
              handleClick(poi.id);
              handlePoiId(poi.id);
              }}></POIImage>
            <TrackName>{poi.name}</TrackName>
          </TrackContainer>
        ))}
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
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
  color: rgb(40, 116, 166);
  font-size: 35px;
  font-weight: bolder;
  margin-top: 20px;
  margin-bottom: 12px;
`;

export default Pois;