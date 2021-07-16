import React from "react";
import styled from "styled-components";
import welcomeImage from "./../assets/images/welcomeImage.jpg";
import { Link } from "react-router-dom"

function Welcome() {
  return (
    <Container>
      <Logo>
        <h3>Audio Tour Logo</h3>
      </Logo>
      <WelcomeContainer>
        <WelcomeText1>Welcome to our</WelcomeText1>
        <WelcomeText2>Audio Tours</WelcomeText2>
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
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  width: 70%;
  height: 125px;
  background-color: rgb(40, 116, 166);
  font-size: 26px;
  color: whitesmoke;
  border-radius: 140px/65px;
`;

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 90%;
`;

const WelcomeText1 = styled.div`
  display: flex;
  font-family: Arial;
  font-size: 35px;
  font-weight: bolder;
  color: rgb(40, 116, 166);
`;

const WelcomeText2 = styled.div`
  display: flex;
  font-family: Arial;
  font-size: 35px;
  font-weight: bolder;
  color: rgb(40, 116, 166);
`;

const LoginButton = styled(Link)`
  font-size: 20px;
  font-weight: bolder;
  text-decoration: none;
  background-color: rgb(40, 116, 166);
  color: whitesmoke;
  padding: 10px;
  margin-top: 30px;
  border-radius: 50px;
`;

const WelcomeImage = styled.img`
  display: flex;
  width: 100%;
  height: auto;
  margin-top: 60px;
  margin-bottom: 20px;
`;

export default Welcome;
