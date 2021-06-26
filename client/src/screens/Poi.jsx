import React from "react";
import styled from "styled-components";
import ElementsPlayerTimeline from "../components/ElementsPlayerTimeline";
import { poisDB, tracksDB, toursDB } from "../database.js";

const image_url = "https://canaltouraudiofiles.s3.eu-west-2.amazonaws.com/Track+1+Welcome.jpg";

function Poi(props) {

  const name = poisDB[0].name;
  const description = tracksDB[0].name;
  const language = toursDB[0].name;
  const audio_url = "https://canaltouraudiofiles.s3.eu-west-2.amazonaws.com/Victoria-English-Track-1_6738168_1621775430.mp3";
  

  return (
    <Container>
      <MediaPlayer>
        <Mask>
          <Mask1>
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
                  viewBox="0 0 24 28"
                  style={{
                    position: "absolute",
                    height: 21,
                    width: 17,
                    top: 21,
                    left: 26,
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
      </MediaPlayer>
      <audio controls preload="auto">
        <source src={audio_url} type="audio/mp3"/>
      </audio>
    
    
      <DetailsContainer>
        <TitleContainer>
          <NamePOI>{name}</NamePOI>
        </TitleContainer>
        <Description>
          {description}
        </Description>
        <ExpanderContainer>
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
        </ExpanderContainer>
      </DetailsContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(29,27,37,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  
`;

const MediaPlayer = styled.div`
  height: 243px;
  width: 400px;
  flex-direction: column;
  display: flex;
  margin-top: 10%;
  margin-bottom: 32px;
`;

const Mask = styled.div`
  height: 243px;
  width: 400px;
  overflow: hidden;
  background-color: transparent;
  flex-direction: column;
  display: flex;
`;

const Mask1 = styled.div`
  height: 243px;
  width: 400px;
  overflow: hidden;
  background-image: url(${image_url});
  background-size: cover;
  background-position: center;
  background-color: rgba(0,0,0,0.3);
  flex-direction: column;
  display: flex;
  position: relative;
`;

const PlayerControlsPlay = styled.div`
  position: absolute;
  height: 60px;
  width: 60px;
  flex-direction: column;
  display: flex;
  bottom: 8px;
  left: 16px;
  display: none;
`;

const Path1Stack = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
`;

const TitleContainer = styled.div`
  height: 42px;
  width: 400px;
  flex-direction: column;
  display: flex;
  align-items: left;
`;

const NamePOI = styled.div`
  font-family: Arial;
  background-color: transparent;
  text-align: center;
  color: rgba(255,255,255,1);
  font-size: 18px;
  margin-left: 1px;
  text-align: left;
`;

const Description = styled.div`
  font-family: Arial;
  top: 0px;
  left: 0px;
  height: 99px;
  opacity: 0.7;
  background-color: transparent;
  text-align: justify;
  color: rgba(255,255,255,1);
  font-size: 14px;
`;

//TODO make clickable to expand description text
const ExpanderContainer = styled.div`
  top: 79px;
  left: 133px;
  height: 20px;
  width: 400px;
  opacity: 0.3;
  flex-direction: row;
  display: flex;
  justify-content: center;
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
  justify-content: center;
`;

const DetailsContainer = styled.div`
  width: 384px;
  height: 99px;
  margin-top: 20px;
  position: relative;
`;

export default Poi;
