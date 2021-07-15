import React from "react";
import styled from "styled-components";

function End(props) {
  return (
    <Container>
    <Logo>
        <h3>Audio Tour Logo</h3>
      </Logo>
        <EndText>The End</EndText>
        <SurveyLink href="https://wwww.google.com">Fill in our satisfaction survey</SurveyLink>
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

const EndText = styled.div`
  display: flex;
  font-family: Arial;
  font-size: 35px;
  font-weight: bolder;
  color: rgb(40, 116, 166);
  margin-top: 40px;
`;

const SurveyLink = styled.a`
  color: rgb(40, 116, 166);
  font-size: 14px;
  margin-top: 50px;
`;

export default End;
