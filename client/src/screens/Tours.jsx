import React, { useEffect , useState} from "react";
import { API, graphqlOperation } from 'aws-amplify';
import styled from "styled-components";
//import { toursDB } from "../database.js";
import SelectTour from "../components/SelectTour";
import { listTours } from '../graphql/queries';

function Tours({ handleTourId }) {

  const [tours, setTours] = useState([])

  useEffect(() => {

    const fetchTours = async () => {
      try {
        const result = await API.graphql(graphqlOperation(listTours));
        if (result.data){
          setTours(result.data.listTours.items)
        }else{
          setTours([])
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchTours();
  }, [])

  return (
    <div>
      <Container>
        {/* <h1>Select your tour...</h1> */}
        {/* {toursDB[0].image_url} */}
        <SelectHeader>Select your tour...</SelectHeader>

        {tours &&
          tours.map((tour) => {
            return (
              <SelectTour
                id={tour.id}
                key={tour.id}
                tour_name={tour.name}
                image_url={tour.image_url}
                handleTourId={handleTourId}
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
