import React from "react";
import styled from "styled-components";

function Access(props) {
  return (
    <Container>
      <Logo>
        <h3>Audio Tour Logo</h3>
      </Logo>
      <Group>
        <Text>Enter your Access Code</Text>
      </Group>
      <Group2>
        <AccessCode name="access-code" type="text" placeholder="123000"></AccessCode>
        <TextQR>Or scan your QR code here:</TextQR>
      </Group2>
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

const Group = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  width: 90%;

  ${'' /* height: 65px;
  width: 333px;
  flex-direction: column;
  display: flex;
  align-items: center; */}
`;
const Group2 = styled(Group)`
  margin-top: 10px;

`

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

const Text = styled.span`
  color: blue;
  text-align: center;
  font-size: 30px;
  width: 70%;
  ${'' /* margin: 16px; */}
  padding: 8px;
  box-shadow: 0px 2px 5px 1px rgba(254, 248, 238, 0.6788100090579711);
`;

const TextQR = styled(Text)`
  font-family: Arial;
  color: blue;
  text-align: center;
  font-size: 25px;
  margin-top: 60px;
  padding: 8px;
  box-shadow: 0px 2px 5px 1px rgba(254, 248, 238, 0.6788100090579711);
`;

const AccessCode = styled.input`
  height: 30px;
  width: 240px;
  color: blue;
  text-align: center;
  font-size: 30px;
  letter-spacing: -0.1944444px;
  box-shadow: 0px 2px 5px 1px rgba(254, 248, 238, 0.6788100090579711);
  padding: 5px;
`;



export default Access;
