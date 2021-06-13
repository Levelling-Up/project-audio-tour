import React from "react";
import styled from "styled-components";
import Navbar from "./../components/Navbar"


function Access(props) {
  return (
    <Container>
    <Navbar />
      <AccessCodeLabel htmlFor="access-code">Enter your access code here:</AccessCodeLabel>
      <AccessCode
        name="access-code"
        type="text"
        placeholder="Access code"
        autoComplete="off"
      ></AccessCode>
      <Text>Or scan your QR code here:</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  height: 65px;
  width: 333px;
  border: 1px solid orange;
`;

const Text = styled.span`
  display: flex;
  font-family: Arial;
  color: blue;
  /* color: rgba(254,248,238,1); */
  text-align: left;
  width: 260px;
  font-size: 20px;
  margin: 16px;
  padding: 8px;
  /* border: 1px solid green; */
`;

const AccessCode = styled.input`
  display: flex;
  font-family: Arial;
  height: 40px;
  width: 250px;
  color: blue;
  text-align: left;
  font-size: 16px;
  padding: 14px;
  /* border: 1px solid blue; */
`;

const AccessCodeLabel = styled.label`
  display: flex;
  font-family: Arial;
  height: 20px;
  width: 250px;
  color: blue;
  /* color: rgba(254,248,238,1); */
  text-align: left;
  font-size: 20px;
  margin-top: 42px;
  margin-bottom: 10px;
  /* border: 1px solid red; */
`;

export default Access;
