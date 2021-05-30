import React, { Component } from "react";
import styled, { css } from "styled-components";

function ElementsCoversNight(props) {
  return (
    <Container {...props}>
      <CoverBg3>
        <CoverBg2
          src={require("../assets/images/55455362cee8f89a0049fa9431e5593e60d971bf.png")}
        ></CoverBg2>
      </CoverBg3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CoverBg3 = styled.div`
  height: 323px;
  border-radius: 4px;
  overflow: hidden;
  background-color: rgba(0,0,0,0.3);
  flex-direction: column;
  display: flex;
`;

const CoverBg2 = styled.img`
  border-radius: 4px;
  overflow: hidden;
  background-color: rgba(0,0,0,0.3);
  flex: 1 1 0%;
  height: 100%;
  object-fit: cover;
  display: flex;
  flex-direction: column;
`;

export default ElementsCoversNight;
