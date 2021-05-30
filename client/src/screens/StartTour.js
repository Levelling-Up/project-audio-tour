import React from "react";
import styled from "styled-components";
import ElementsCoversNight from "../components/ElementsCoversNight";
import ElementsPlayerTimeline from "../components/ElementsPlayerTimeline";
import ElementsCovers323 from "../components/ElementsCovers323";

function Index(props) {
  return (
    <Container>
      <ElementsCoversNightStackRow>
        <ElementsCoversNightStack>
          <ElementsCoversNight
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: 430,
              right: 0,
              backgroundColor: "transparent",
              boxShadow: "0px 12px 18px  1px rgba(0,0,0,0.3673290307971014) "
            }}
          ></ElementsCoversNight>
          <Time>
            <Rectangle6>
              <ElementsPlayerTimeline
                style={{
                  height: 21,
                  width: 300,
                  backgroundColor: "transparent",
                  marginTop: 10,
                  marginLeft: 12
                }}
              ></ElementsPlayerTimeline>
            </Rectangle6>
          </Time>
          <Pause>
            <PathStack>
              <svg
                viewBox="0 0 70 70"
                style={{
                  position: "absolute",
                  height: 70,
                  width: 70,
                  top: 0,
                  left: 0,
                  backgroundColor: "transparent",
                  borderColor: "transparent"
                }}
              >
                <path
                  strokeWidth={0}
                  fill="rgba(29,27,37,1)"
                  d="M35.00 70.00 C54.33 70.00 70.00 54.33 70.00 35.00 C70.00 15.67 54.33 0.00 35.00 0.00 C15.67 0.00 0.00 15.67 0.00 35.00 C0.00 54.33 15.67 70.00 35.00 70.00 Z"
                ></path>
              </svg>
              <svg
                viewBox="0 0 18.63 20"
                style={{
                  position: "absolute",
                  height: 20,
                  width: 19,
                  top: 25,
                  left: 26,
                  backgroundColor: "transparent",
                  borderColor: "transparent"
                }}
              >
                <path
                  strokeWidth={0}
                  fill="rgba(254,248,238,1)"
                  d="M6.88 0.63 L6.88 19.38 L6.25 20.00 L0.63 20.00 L0.00 19.38 L0.00 0.63 L0.63 0.00 L6.25 0.00 M18.63 0.63 L18.63 19.38 L18.00 20.00 L12.38 20.00 L11.75 19.38 L11.75 0.63 L12.38 0.00 L18.00 0.00 "
                ></path>
              </svg>
            </PathStack>
          </Pause>
        </ElementsCoversNightStack>
        <ElementsCovers323
          style={{
            height: 373,
            backgroundColor: "transparent",
            flex: 1,
            marginLeft: 20,
            marginTop: 17
          }}
        ></ElementsCovers323>
      </ElementsCoversNightStackRow>
      <Style></Style>
      <Group>
        <ElementsImgArtist>
          <svg
            viewBox="0 0 31.25 31.25"
            style={{
              height: 31,
              width: 31,
              backgroundColor: "transparent",
              borderColor: "transparent",
              marginLeft: 1
            }}
          >
            <path
              strokeWidth={0}
              fill="rgba(254,248,238,1)"
              d="M15.59 31.25 C7.41 31.25 0.70 24.98 0.00 16.98 C0.04 16.21 0.67 15.59 1.45 15.59 C1.90 15.59 2.30 15.79 2.57 16.11 C2.58 16.12 2.59 16.11 2.59 16.08 C4.32 17.92 6.77 19.07 9.50 19.07 C14.78 19.07 19.07 14.79 19.07 9.50 C19.07 6.75 17.90 4.30 16.05 2.57 C16.05 2.56 16.07 2.56 16.06 2.55 C15.77 2.28 15.59 1.90 15.59 1.47 C15.59 0.68 16.21 0.05 16.99 0.00 C24.98 0.71 31.25 7.41 31.25 15.59 C31.25 24.24 24.24 31.25 15.59 31.25 Z"
            ></path>
          </svg>
        </ElementsImgArtist>
        <GoodNight>Good Night</GoodNight>
      </Group>
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

const Time = styled.div`
  position: absolute;
  top: 390px;
  left: 0px;
  height: 40px;
  width: 323px;
  flex-direction: column;
  display: flex;
`;

const Rectangle6 = styled.div`
  height: 40px;
  width: 323px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: transparent;
  flex-direction: column;
  display: flex;
`;

const Pause = styled.div`
  position: absolute;
  top: 180px;
  left: 127px;
  height: 70px;
  width: 70px;
  flex-direction: column;
  display: flex;
`;

const PathStack = styled.div`
  width: 70px;
  height: 70px;
  position: relative;
`;

const ElementsCoversNightStack = styled.div`
  height: 430px;
  flex: 1 1 0%;
  margin-right: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ElementsCoversNightStackRow = styled.div`
  height: 430px;
  flex-direction: row;
  display: flex;
  margin-top: 153px;
  margin-left: 46px;
  margin-right: -251px;
`;

const Style = styled.div`
  height: 8px;
  width: 35px;
  border-radius: 10px;
  background-color: rgba(254,248,238,1);
  margin-top: 62px;
  margin-left: 190px;
`;

const Group = styled.div`
  height: 65px;
  width: 92px;
  flex-direction: column;
  display: flex;
  margin-top: -607px;
  margin-left: 161px;
`;

const ElementsImgArtist = styled.div`
  height: 32px;
  width: 33px;
  flex-direction: column;
  display: flex;
  margin-left: 29px;
`;

const GoodNight = styled.span`
  font-family: Arial;
  color: rgba(254,248,238,1);
  text-align: center;
  font-size: 17px;
  margin-top: 9px;
  box-shadow: 0px 2px 5px  1px rgba(254,248,238,0.6788100090579711) ;
`;

export default Index;
