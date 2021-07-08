import React, { useState } from "react";
import styled from "styled-components";
import { listCodes } from '../graphql/queries';
import InputWithLabel from "../components/InputWithLabel";
import { API } from 'aws-amplify';
import { useHistory } from "react-router-dom";

function Login(props) {

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const history = useHistory();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleCode = (event) => {
    setCode(event.target.value);
  }

  const fetchCode = async () => {
    try {
      let filter = {
        and:[
        {code: {
            eq: {code}
        }},
        {claimed: {
            eq: true
        }},
        {email: {
            eq: {email}
        }}
      ]
      };
      const result = await API.graphql({ query: listCodes, variables: { filter: filter}});
      if (result.data.listCodes.items[0]){
        console.log(result.data.listCodes.items[0])
        history.push("/tours")
      }else{
        console.log("error, we could not find any evidence of you having purchased this code")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Logo>
        <h3>Audio Tour Logo</h3>
      </Logo>

      <Group>
        <InputWithLabel id="email-input" label="Email:" value={email} onInputChange={handleEmail} ></InputWithLabel>
        <InputWithLabel id="code-input" type="number" label="Code:" value={code} onInputChange={handleCode} ></InputWithLabel>
        <SubmitButton onClick={() => {
          fetchCode();
          }} >Submit</SubmitButton>

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
  width: 70%;
  height: 125px;
  background-color: rgb(40, 116, 166);
  font-size: 26px;
  color: whitesmoke;
  border-radius: 140px/65px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 333px;
  margin-top: 30px;
`;

const SubmitButton = styled.button`
  font-size: 20px;
  font-weight: bolder;
  text-decoration: none;
  background-color: rgb(40, 116, 166);
  color: whitesmoke;
  padding: 10px;
  margin-top: 30px;
  border-radius: 50px;
`;

const Text = styled.span`
  display: flex;
  font-family: Arial;
  color: rgb(40, 116, 166);
  text-align: center;
  width: 260px;
  font-size: 30px;
  font-weight: bolder;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export default Login;
