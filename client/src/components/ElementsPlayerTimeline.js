import React, { Component } from "react";
import styled, { css } from "styled-components";

function ElementsPlayerTimeline(props) {
  return (
    <Container {...props}>
      <Rect>
        <Progress>
          <Rectangle127Stack>
            <Rectangle127>
              <Rectangle1271></Rectangle1271>
            </Rectangle127>
            <svg
              viewBox="0 0 6 6"
              style={{
                position: "absolute",
                height: 6,
                width: 6,
                top: 0,
                left: 77,
                backgroundColor: "transparent",
                borderColor: "transparent"
              }}
            >
              <path
                strokeWidth={0}
                fill="rgba(255,255,255,1)"
                d="M3.00 6.00 C4.66 6.00 6.00 4.66 6.00 3.00 C6.00 1.34 4.66 0.00 3.00 0.00 C1.34 0.00 0.00 1.34 0.00 3.00 C0.00 4.66 1.34 6.00 3.00 6.00 Z"
              ></path>
            </svg>
          </Rectangle127Stack>
        </Progress>
        <StyleRow>
          <Style>2:10</Style>
          <StyleFiller></StyleFiller>
          <Style1>-03:56</Style1>
        </StyleRow>
      </Rect>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rect = styled.div`
  height: 21px;
  width: 303px;
  flex-direction: column;
  display: flex;
`;

const Progress = styled.div`
  height: 6px;
  width: 303px;
  flex-direction: column;
  display: flex;
`;

const Rectangle127 = styled.div`
  position: absolute;
  top: 2px;
  left: 0px;
  height: 2px;
  width: 303px;
  border-radius: 100px;
  background-color: rgba(147,168,179,0.1196218297101449);
  flex-direction: column;
  display: flex;
`;

const Rectangle1271 = styled.div`
  height: 2px;
  width: 82px;
  border-radius: 100px;
  background-color: rgba(255,255,255,1);
`;

const Rectangle127Stack = styled.div`
  width: 303px;
  height: 6px;
  position: relative;
`;

const Style = styled.span`
  font-family: Arial;
  height: 12px;
  width: 39px;
  background-color: transparent;
  color: rgba(147,168,179,1);
  font-size: 10px;
  letter-spacing: 0.300000011920929px;
`;

const StyleFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const Style1 = styled.span`
  font-family: Arial;
  height: 12px;
  width: 54px;
  background-color: transparent;
  text-align: right;
  color: rgba(147,168,179,1);
  font-size: 10px;
  letter-spacing: 0.300000011920929px;
`;

const StyleRow = styled.div`
  height: 12px;
  flex-direction: row;
  display: flex;
  margin-top: 3px;
`;

export default ElementsPlayerTimeline;
