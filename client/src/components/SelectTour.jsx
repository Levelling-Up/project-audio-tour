import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const SelectTour = ({ id, image_url, tour_name, callbackFunction }) => {
  const history = useHistory();

  const handleViewClick = () => {
    history.push(`/tours/${id}`);
  };
  

  return (
    
    <div className="list-tour">
      <Container>
      <p className="list-tour-name">
        <b>Tour name:</b> {tour_name}
      </p>
      {/* <button onClick={() =>{
          handleViewClick();
         callbackFunction(id)}}>Start your fantastic Tour {tour_name}</button> */}
         {/* <StyledButton><img src="https://images.unsplash.com/photo-1503377235941-5c4400135188?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" alt="my image" onClick={() =>{
          handleViewClick();
         callbackFunction(id)}} /></StyledButton> */}

        <StyledButton>
           <ButtonImg onClick={() =>{
          handleViewClick();
         callbackFunction(id)}}></ButtonImg>
         </StyledButton>
         
         
      </Container>   
    </div>
    
  );
};

const StyledButton = styled.button`
    background-color: #21618c;
    font-size: 32px;
    color: white;
    min-width: 100px;
    min-height: 100px;
    `;


// src: url(${props => props.src});
const ButtonImg = styled.img.attrs({
  src: "https://images.unsplash.com/photo-1503377235941-5c4400135188?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
})`
  width: 150px;
  height: 150px;
  border: 1px solid blue;
  &:hover {
    opacity: 0.5;
  }
  `; 

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
export default SelectTour;