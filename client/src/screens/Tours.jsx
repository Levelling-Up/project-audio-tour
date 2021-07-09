import React, { useEffect , useState, useContext} from "react";
import { API, graphqlOperation } from 'aws-amplify';
import styled from "styled-components";
//import { toursDB } from "../database.js";
import SelectTour from "../components/SelectTour";
import { listTours } from '../graphql/queries';
import useTours from '../Hooks/useTours'
import { UserContext } from "../UserContext";

function Tours({ handleTourId }) {
  const {user,setUser} = useContext(UserContext);
  const {tours} = useTours()
  
  
  // useEffect(() => {

  //   const fetchTours = async () => {
  //     try {
  //       const result = await API.graphql(graphqlOperation(listTours));
  //       if (result.data){
  //         setTours(result.data.listTours.items)
  //       }else{
  //         setTours([])
  //       }
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchTours();
  // }, [])

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
  overflow: auto;
`;


const SelectHeader = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 35px;
  font-weight: bolder;
  color: rgb(40, 116, 166);
`;

export default Tours;
