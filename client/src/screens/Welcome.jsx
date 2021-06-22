import React from "react";
import styled from "styled-components";
import welcomeImage from "./../assets/images/welcomeImage.jpg";
import Navbar from "../components/Navbar"

function Welcome() {

  return (
    <Container>
    <Navbar />
      <Logo>
        <h3>Audio Tour Logo</h3>
      </Logo>
      <WelcomeContainer>
        <WelcomeText>Welcome to Audio Tours</WelcomeText>
        <WelcomeImage src={welcomeImage}></WelcomeImage>
      </WelcomeContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  width: 55%;
  height: 95px;
  background: blue;
  font-size: 26px;
  color: whitesmoke;
  border-radius: 100px/80px;
`;

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  width: 80%;
`;

const WelcomeText = styled.div`
  display: flex;
  width: 40%;
  font-size: 30px;
  color: blue;
`;

const WelcomeImage = styled.img`
  display: flex;
  width: 100%;
  height: auto;
  margin-top: 70px;

`;

export default Welcome;
