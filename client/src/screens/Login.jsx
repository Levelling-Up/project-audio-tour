import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { listCodes } from '../graphql/queries';
import InputWithLabel from "../components/InputWithLabel";
import { API } from 'aws-amplify';
import { useHistory } from "react-router-dom";

function Login(props) {
  
  const [userData, setUserData] = useState({email: "", code: ""});
  const [challenge, setChallenge] = useState({email: "", code: ""});
  const history = useHistory();

  const handleInput = (event) => {
    //This won't be necessary in React 17
    event.persist()
    if(event.target.id === "email-input"){
      setUserData(prevState => {
        return {...prevState, email: event.target.value }
      });
    } else if(event.target.id === "code-input"){
      setUserData(prevState => {
        return {...prevState, code: event.target.value }
      });
    }

  }

  useEffect(() => {

    const fetchCode = async () => {
      try {
        let filter = {
          and:[
          {code: {
              eq: challenge.code
          }},
          {claimed: {
              eq: true
          }},
          {email: {
              eq: challenge.email
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

    fetchCode()
  },[challenge, history])

  return (
    <Container>
      <Logo>
        <h3>Audio Tour Logo</h3>
      </Logo>

      <Group>
        <InputWithLabel id="email-input" label="Email:" value={userData.email} onInputChange={handleInput} ></InputWithLabel>
        <InputWithLabel id="code-input" type="number" label="Code:" value={userData.code} onInputChange={handleInput} ></InputWithLabel>
        <SubmitButton onClick={() => {
          setChallenge({ code: userData.code, email: userData.email }
          );
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
