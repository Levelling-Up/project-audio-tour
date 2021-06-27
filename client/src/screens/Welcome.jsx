import React from "react";
import styled from "styled-components";
import welcomeImage from "./../assets/images/welcomeImage.jpg";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <Container>
      <Logo>
        <h3>Audio Tour Logo</h3>
      </Logo>
      <WelcomeContainer>
        <WelcomeText>Welcome to Audio Tours</WelcomeText>
        <LoginButton to="/login">Login</LoginButton>
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
  background-color: rgb(52, 152, 219);
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
  width: 48%;
  font-size: 30px;
  font-weight: bolder;
  color: rgb(52, 152, 219);
`;

const LoginButton = styled(Link)`
  font-weight: bolder;
  text-decoration: none;
  background-color: rgb(40, 116, 166);
  color: whitesmoke;
  padding: 10px;
  margin-top: 20px;
  border-radius: 50px;
`;

const WelcomeImage = styled.img`
  display: flex;
  width: 100%;
  height: auto;
  margin-top: 70px;
`;

export default Welcome;