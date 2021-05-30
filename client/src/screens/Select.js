import React from "react";
import styled from "styled-components";
import IcosArrowDown from "../components/IcosArrowDown";

function Discover(props) {
  return (
    <Container>
      <BigBanner>
        <Mask>
          <Mask1>
            <LongKissGoodnight>Choose a Tour</LongKissGoodnight>
          </Mask1>
        </Mask>
      </BigBanner>
      <Style>
        <CopyRow>
          <Copy>
            <Style3></Style3>
            <TimeFlies>Victoria Tour</TimeFlies>
          </Copy>
          <Style1>
            <Style2></Style2>
            <NothingSeek>Wheel Tour</NothingSeek>
          </Style1>
        </CopyRow>
      </Style>
      <Copy3>
        <Copy2Row>
          <Copy2>
            <Style9></Style9>
            <SoulMate>Pub Tour</SoulMate>
          </Copy2>
          <Style7>
            <Style8></Style8>
            <ThatSLife>Day Tour</ThatSLife>
          </Style7>
        </Copy2Row>
      </Copy3>
      <IcosArrowDownRow>
        <IcosArrowDown
          style={{
            height: 24,
            width: 24,
            transform: "rotate(undefined)",
            backgroundColor: "transparent"
          }}
        ></IcosArrowDown>
        <Mood>LUCS</Mood>
      </IcosArrowDownRow>
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

const BigBanner = styled.div`
  height: 160px;
  width: 380px;
  flex-direction: column;
  align-items: center;
  display: flex;
  margin-top: 76px;
  margin-left: 17px;
`;

const Mask = styled.div`
  height: 160px;
  width: 380px;
  border-radius: 10px;
  overflow: hidden;
  background-color: rgba(20,18,25,1);
  flex-direction: column;
  display: flex;
  align-items: center;
`;

const Mask1 = styled.div`
  height: 160px;
  width: 380px;
  border-radius: 4px;
  overflow: hidden;
  background-color: rgba(0,0,0,0.3);
  flex-direction: column;
  display: flex;
  align-items: center;
`;

const LongKissGoodnight = styled.div`
  font-family: Arial;
  background-color: transparent;
  text-align: center;
  color: rgba(254,248,238,1);
  font-size: 30px;
  margin-top: 59px;
  margin-left: 39px;
`;

const Style = styled.div`
  height: 136px;
  width: 356px;
  flex-direction: row;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-left: 29px;
`;

const Copy = styled.div`
  height: 136px;
  width: 168px;
  flex-direction: column;
  display: flex;
`;

const Style3 = styled.div`
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

const Style2 = styled.div`
  height: 107px;
  width: 168px;
  border-radius: 4px;
  background-color: rgba(0,0,0,0.3);
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
  justify-content: center;
  flex: 1 1 0%;
`;

const Copy2 = styled.div`
  height: 136px;
  width: 168px;
  flex-direction: column;
  display: flex;
`;

const Copy3 = styled.div`
  height: 136px;
  width: 356px;
  flex-direction: row;
  display: flex;
  margin-top: 18px;
  margin-left: 29px;
`;

const Style9 = styled.div`
  height: 107px;
  width: 168px;
  border-radius: 4px;
  background-color: rgba(0,0,0,0.3);
`;

const SoulMate = styled.span`
  font-family: Arial;
  background-color: transparent;
  color: rgba(184,180,187,1);
  font-size: 14px;
  margin-top: 9px;
`;

const Style7 = styled.div`
  height: 136px;
  width: 168px;
  flex-direction: column;
  display: flex;
  margin-left: 20px;
`;

const Style8 = styled.div`
  height: 107px;
  width: 168px;
  border-radius: 4px;
  background-color: rgba(0,0,0,0.3);
`;

const ThatSLife = styled.span`
  font-family: Arial;
  background-color: transparent;
  color: rgba(184,180,187,1);
  font-size: 14px;
  margin-top: 9px;
`;

const Copy2Row = styled.div`
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
  margin-top: -668px;
  margin-left: 20px;
  margin-right: 181px;
`;

export default Discover;