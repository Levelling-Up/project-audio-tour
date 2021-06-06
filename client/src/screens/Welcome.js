import React, { useState } from "react";
import styled from "styled-components";
import welcomeImage from "./../assets/images/welcomeImage.jpg";
import Navbar from "./../components/Navbar"

function Welcome() {

  let [language, setLanguage] = useState("English")

  return (
    <Container>
    <Navbar setLanguage={setLanguage} language={language} />
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
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  width: 55%;
  height: 95px;
  background: blue;
  color: rgb(253, 255, 247);
  border-radius: 100px/50px;
`;

const WelcomeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  width: 90%;
`;

const WelcomeText = styled(Container)`
  display: flex;
  width: 50%;
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
