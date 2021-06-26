import React from "react";
import styled from "styled-components";

function Login(props) {
  return (
    <Container>
      <Logo>
        <h3>Audio Tour Logo</h3>
      </Logo>

      <Group>
        <AccessCodeLabel htmlFor="access-code">
          Enter your access code here:
        </AccessCodeLabel>
        <AccessCode
          name="access-code"
          type="text"
          placeholder="Access code"
          autoComplete="off"
        ></AccessCode>
        
        <Text>Or scan your QR code here:</Text>
      </Group>
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
  width: 55%;
  height: 95px;
  background: blue;
  font-size: 26px;
  color: whitesmoke;
  border-radius: 100px/80px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 333px;
`;

const AccessCodeLabel = styled.label`
  display: flex;
  font-family: Arial;
  height: 70px;
  width: 265px;
  color: blue;
  text-align: center;
  font-size: 30px;
  margin-top: 50px;
  margin-bottom: 40px;
  /* border: 1px solid red; */
`;

const AccessCode = styled.input`
  display: flex;
  font-family: Arial;
  height: 40px;
  width: 250px;
  color: blue;
  /* text-align: left; */
  font-size: 20px;
  margin-top: 40px;
  padding: 12px;
  border: 1px solid blue;
`;

const Text = styled.span`
  display: flex;
  font-family: Arial;
  color: blue;
  text-align: center;
  width: 260px;
  font-size: 30px;
  margin-top: 40px;
  /* border: 1px solid orange; */
`;

export default Login;
