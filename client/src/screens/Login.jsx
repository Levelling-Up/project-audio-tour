import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { listCodes } from '../graphql/queries';
import { API } from 'aws-amplify';
import { useHistory } from "react-router-dom";

function Login(props) {

  const history = useHistory();

  const fetchCode = async () => {
    try {
      let filter = {
        and:[
        {code: {
            eq: "20"//TODO add code state variable
        }},
        {claimed: {
            eq: true
        }},
        {email: {
            eq: "ecalogero@gmail.com"//TODO add email state variable
        }}
      ]
      };
      const result = await API.graphql({ query: listCodes, variables: { filter: filter}});
      if (result.data){
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
      <EmailLabel htmlFor="email-input">
          Enter your email address here:
        </EmailLabel>
        <EmailInput
          name="email-input"
          type="text"
          placeholder="Email"
          autoComplete="on"
        ></EmailInput>
        <AccessCodeLabel htmlFor="access-code">
          Enter your access code here:
        </AccessCodeLabel>
        <AccessCode
          name="access-code"
          type="text"
          placeholder="Access code"
          autoComplete="off"
        ></AccessCode>
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
`;

const AccessCodeLabel = styled.label`
  display: flex;
  font-family: Arial;
  font-size: 35px;
  font-weight: bolder;
  height: 70px;
  width: 60%;
  color: rgb(40, 116, 166);
  text-align: center;
  margin-top: 50px;
  margin-bottom: 30px;
`;

const AccessCode = styled.input`
  display: flex;
  font-family: Arial;
  height: 40px;
  width: 60%;
  color: rgb(40, 116, 166);
  /* text-align: left; */
  font-size: 25px;
  margin-top: 40px;
  padding: 12px;
  border: 2px solid rgb(40, 116, 166);
`;

const SubmitButton = styled(Link)`
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
