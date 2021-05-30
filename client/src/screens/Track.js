import React from "react";
import styled from "styled-components";
import IcosArrowDown from "../components/IcosArrowDown";

function Song(props) {
  return (
    <Container>
      <BigBanner>
        <Mask>
          <Mask1>
            <IcosArrowDown
              style={{
                height: 24,
                width: 24,
                transform: "rotate(undefined)",
                backgroundColor: "transparent",
                marginTop: 32,
                marginLeft: 20
              }}
            ></IcosArrowDown>
            <PlayerControlsPlay>
              <Path1Stack>
                <svg
                  viewBox="0 0 60 60"
                  style={{
                    position: "absolute",
                    height: 60,
                    width: 60,
                    top: 0,
                    left: 0,
                    backgroundColor: "transparent",
                    borderColor: "transparent"
                  }}
                >
                  <path
                    strokeWidth={0}
                    fill="rgba(254,248,238,1)"
                    d="M30.00 60.00 C46.57 60.00 60.00 46.57 60.00 30.00 C60.00 13.43 46.57 0.00 30.00 0.00 C13.43 0.00 0.00 13.43 0.00 30.00 C0.00 46.57 13.43 60.00 30.00 60.00 Z"
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 16.9 20.59"
                  style={{
                    position: "absolute",
                    height: 21,
                    width: 17,
                    top: 20,
                    left: 24,
                    backgroundColor: "transparent",
                    borderColor: "transparent"
                  }}
                >
                  <path
                    strokeWidth={0}
                    fill="rgba(33,13,49,1)"
                    d="M1.67 1.11 L18.23 12.11 C18.23 12.11 19.89 13.22 18.23 14.32 C18.23 14.32 1.67 25.33 1.67 25.33 C1.67 25.33 0.00 26.44 0.00 24.44 C0.00 24.44 0.00 2.00 0.00 2.00 C0.00 2.00 0.00 0.00 1.67 1.11 Z"
                  ></path>
                </svg>
              </Path1Stack>
            </PlayerControlsPlay>
          </Mask1>
        </Mask>
      </BigBanner>
      <DiscoverRow>
        <Discover>Discover</Discover>
        <Style>
          <Rectangle5>
            <svg
              viewBox="-0.75 -0.75 9 15"
              style={{
                height: 15,
                width: 9,
                backgroundColor: "transparent",
                borderColor: "transparent",
                transform: "rotate(undefined)",
                marginTop: 3,
                marginLeft: 11
              }}
            >
              <path
                strokeWidth={3}
                fill="transparent"
                stroke="rgba(255,255,255,1)"
                fillOpacity={0.7}
                strokeOpacity={0.7}
                d="M7.50 13.50 L1.50 7.50 L7.50 1.50 "
              ></path>
            </svg>
          </Rectangle5>
        </Style>
      </DiscoverRow>
      <NothingSeekRow>
        <NothingSeek>Nothing seek</NothingSeek>
        <TimeFlies>Time flies</TimeFlies>
      </NothingSeekRow>
      <Rectangle3Row>
        <Rectangle3></Rectangle3>
        <Rectangle3Copy3Column>
          <Rectangle3Copy3></Rectangle3Copy3>
          <Rectangle3Copy4></Rectangle3Copy4>
        </Rectangle3Copy3Column>
        <Rectangle3Copy></Rectangle3Copy>
      </Rectangle3Row>
      <Group2>
        <LongKissGoodnight>Long Kiss Goodnight</LongKissGoodnight>
        <SeeRgb>SeeRgb</SeeRgb>
      </Group2>
      <BetweenHeavenAndEStack>
        <BetweenHeavenAndE>
          Between Heaven and Earth, every single step of ours is at full
          throttle, while every single road is twisting and turning. There is no
          constant view…
        </BetweenHeavenAndE>
        <Group4>
          <ViewFullTextRow>
            <ViewFullText>View full text</ViewFullText>
            <ChevronDown>
              <svg
                viewBox="-0.75 -0.75 9 15"
                style={{
                  height: 15,
                  width: 9,
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  marginTop: -1,
                  marginLeft: -1
                }}
              >
                <path
                  strokeWidth={3}
                  fill="transparent"
                  stroke="rgba(255,255,255,1)"
                  d="M7.50 13.50 L1.50 7.50 L7.50 1.50 "
                ></path>
              </svg>
            </ChevronDown>
          </ViewFullTextRow>
        </Group4>
      </BetweenHeavenAndEStack>
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

const BigBanner = styled.div`
  height: 243px;
  width: 414px;
  flex-direction: column;
  display: flex;
`;

const Mask = styled.div`
  height: 243px;
  width: 414px;
  overflow: hidden;
  background-color: transparent;
  flex-direction: column;
  display: flex;
`;

const Mask1 = styled.div`
  height: 243px;
  width: 414px;
  overflow: hidden;
  background-color: rgba(0,0,0,0.3);
  flex-direction: column;
  display: flex;
`;

const PlayerControlsPlay = styled.div`
  height: 60px;
  width: 60px;
  flex-direction: column;
  display: flex;
  margin-top: 107px;
  margin-left: 334px;
`;

const Path1Stack = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
`;

const Discover = styled.span`
  font-family: Arial;
  opacity: 0.7;
  background-color: transparent;
  text-align: center;
  color: rgba(255,255,255,1);
  font-size: 14px;
`;

const Style = styled.div`
  height: 20px;
  width: 30px;
  flex-direction: column;
  display: flex;
  margin-left: 301px;
`;

const Rectangle5 = styled.div`
  height: 20px;
  width: 30px;
  border-radius: 2px;
  background-color: rgba(255,255,255,0.48378906082834344);
  flex-direction: column;
  display: flex;
`;

const DiscoverRow = styled.div`
  height: 20px;
  flex-direction: row;
  display: flex;
  margin-top: 246px;
  margin-left: 20px;
  margin-right: 10px;
`;

const NothingSeek = styled.span`
  font-family: Arial;
  background-color: transparent;
  color: rgba(255,255,255,1);
  font-size: 14px;
`;

const TimeFlies = styled.span`
  font-family: Arial;
  background-color: transparent;
  color: rgba(255,255,255,1);
  font-size: 14px;
  margin-left: 250px;
`;

const NothingSeekRow = styled.div`
  height: 18px;
  flex-direction: row;
  display: flex;
  margin-top: 160px;
  margin-left: 20px;
  margin-right: 4px;
`;

const Rectangle3 = styled.div`
  height: 140px;
  width: 240px;
  border-radius: 4px;
  background-color: rgba(0,0,0,0.3);
`;

const Rectangle3Copy3 = styled.div`
  height: 68px;
  width: 68px;
  border-radius: 4px;
  background-color: rgba(0,0,0,0.3);
`;

const Rectangle3Copy4 = styled.div`
  height: 68px;
  width: 68px;
  border-radius: 4px;
  background-color: rgba(0,0,0,0.3);
  margin-top: 4px;
`;

const Rectangle3Copy3Column = styled.div`
  width: 68px;
  flex-direction: column;
  display: flex;
  margin-left: 4px;
`;

const Rectangle3Copy = styled.div`
  height: 140px;
  width: 240px;
  border-radius: 4px;
  background-color: rgba(0,0,0,0.3);
  margin-left: 20px;
`;

const Rectangle3Row = styled.div`
  height: 140px;
  flex-direction: row;
  display: flex;
  margin-top: -168px;
  margin-left: 20px;
  margin-right: -178px;
`;

const Group2 = styled.div`
  height: 42px;
  width: 181px;
  flex-direction: column;
  display: flex;
  margin-top: -402px;
  margin-left: 20px;
`;

const LongKissGoodnight = styled.span`
  font-family: Arial;
  background-color: transparent;
  text-align: center;
  color: rgba(255,255,255,1);
  font-size: 18px;
  margin-left: 1px;
`;

const SeeRgb = styled.span`
  font-family: Arial;
  background-color: transparent;
  color: rgba(255,255,255,1);
  font-size: 12px;
  margin-top: 1px;
  margin-left: 2px;
`;

const BetweenHeavenAndE = styled.span`
  font-family: Arial;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 99px;
  width: 374px;
  opacity: 0.7;
  background-color: transparent;
  text-align: justify;
  color: rgba(255,255,255,1);
  font-size: 14px;
`;

const Group4 = styled.div`
  position: absolute;
  top: 79px;
  left: 133px;
  height: 20px;
  width: 109px;
  opacity: 0.3;
  flex-direction: row;
  display: flex;
`;

const ViewFullText = styled.span`
  font-family: Arial;
  background-color: transparent;
  text-align: center;
  color: rgba(255,255,255,1);
  font-size: 14px;
`;

const ChevronDown = styled.div`
  height: 12px;
  width: 6px;
  transform: rotate(-90.00deg);
  flex-direction: column;
  display: flex;
  margin-left: 21px;
  margin-top: 4px;
`;

const ViewFullTextRow = styled.div`
  height: 18px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 3px;
`;

const BetweenHeavenAndEStack = styled.div`
  width: 374px;
  height: 99px;
  margin-top: 20px;
  margin-left: 20px;
  position: relative;
`;

export default Song;
