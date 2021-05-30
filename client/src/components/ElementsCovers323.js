import React, { Component } from "react";
import styled, { css } from "styled-components";

function ElementsCovers323(props) {
  return (
    <Container {...props}>
      <CoverBg1>
        <CoverBg
          src={require("../assets/images/c368cf21eb1b9dfc0baf884fe4ad7dda04ee8e57.png")}
        ></CoverBg>
      </CoverBg1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CoverBg1 = styled.div`
  height: 323px;
  border-radius: 4px;
  overflow: hidden;
  background-color: transparent;
  flex-direction: column;
  display: flex;
  box-shadow: 0px 24px 48px  1px rgba(8,13,25,0.3591202445652174) ;
`;

const CoverBg = styled.img`
  border-radius: 4px;
  overflow: hidden;
  background-color: transparent;
  flex: 1 1 0%;
  height: 100%;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 24px 48px  1px rgba(8,13,25,0.3591202445652174) ;
`;

export default ElementsCovers323;
