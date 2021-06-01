import React from "react";
import styled from "styled-components";

function Welcome(props) {
  return (
    <Container>
      <Logo>
        <h3>Audio Tour Logo</h3>
      </Logo>
      <Welcome>
        <h2>Welcome to Audio Tours</h2>
      </Welcome>
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
  margin-top: 40px;
  width: 50%;
  height: 85px;
  background: blue;
  border-radius: 100px / 50px;
`;

export default Welcome;
