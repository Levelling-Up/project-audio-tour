import React from "react";
import styled from "styled-components";

function End(props) {
  return (
    <Container>
      <Group>
        <End>The End.</End>
        <SurveyLink href="https://wwww.google.com">Fill in our satisfaction survey</SurveyLink>
      </Group>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(29,27,37,1);
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Group = styled.div`
  height: 125px;
  width: 220px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 166px;
`;

const End = styled.div`
  padding: 16px;
  text-align: center;
  font-family: Arial;
  height: 14px;
  width: 143px;
  color: rgba(254,248,238,1);
  align-items: center;
  font-size: 14px;
  letter-spacing: -0.1944444px;
  box-shadow: 0px 2px 5px  1px rgba(254,248,238,0.6788100090579711) ;
`;

const SurveyLink = styled.a`
  padding: 16px;
  text-align: center;
  font-family: Arial;
  height: 32px;
  width: 220px;
  color: rgba(254,248,238,1);
  font-size: 14px;
  letter-spacing: -0.1944444px;
`;

export default End;
