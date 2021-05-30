import React from "react";
import styled from "styled-components";
import IcosArrowDown from "../components/IcosArrowDown";

function Discover(props) {
  return (
    <Container>
      <IcosArrowDownRow>
        <IcosArrowDown
          style={{
            height: 24,
            width: 24,
            transform: "rotate(undefined)",
            backgroundColor: "transparent"
          }}
        ></IcosArrowDown>
        <Mood>MOOD</Mood>
      </IcosArrowDownRow>

      <Style>
        <CopyRow>
          <Copy>
            <POIImage></POIImage>
            <TimeFlies>Time flies</TimeFlies>
          </Copy>
          <Style1>
            <POIImage></POIImage>
            <NothingSeek>Nothing seek</NothingSeek>
          </Style1>
        </CopyRow>
      </Style>

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(29,27,37,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Style = styled.div`
  height: 136px;
  width: 356px;
  flex-direction: row;
  display: flex;
  margin-top: 20px;
  margin-left: 29px;
`;

const Copy = styled.div`
  height: 136px;
  width: 168px;
  flex-direction: column;
  display: flex;
`;

const POIImage = styled.div`
  height: 107px;
  width: 168px;
  border-radius: 4px;
  background-color: rgba(0,0,0,0.3);
`;

const TimeFlies = styled.span`
  font-family: Arial;
  background-color: transparent;
  color: rgba(184,180,187,1);
  font-size: 14px;
  margin-top: 9px;
`;

const Style1 = styled.div`
  height: 136px;
  width: 168px;
  flex-direction: column;
  display: flex;
  margin-left: 20px;
`;

const NothingSeek = styled.span`
  font-family: Arial;
  background-color: transparent;
  color: rgba(184,180,187,1);
  font-size: 14px;
  margin-top: 9px;
`;

const CopyRow = styled.div`
  height: 136px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
`;

const Mood = styled.span`
  font-family: Arial;
  background-color: transparent;
  text-align: center;
  color: rgba(255,255,255,1);
  font-size: 17px;
  margin-left: 136px;
  margin-top: 1px;
`;

const IcosArrowDownRow = styled.div`
  height: 24px;
  flex-direction: row;
  display: flex;
  margin-top: 0px;
  margin-left: 20px;
  margin-right: 181px;
`;

export default Discover;
