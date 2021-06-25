import React from "react";
import styled from "styled-components";

function IcosArrowDown(props) {
  return (
    <Container {...props}>
      <Rect>
        <Path1Stack>
          <svg
            viewBox="0 0 24 24"
            style={{
              position: "absolute",
              height: 24,
              width: 24,
              top: 0,
              left: 0,
              backgroundColor: "transparent",
              borderColor: "transparent"
            }}
          >
            <path
              strokeWidth={0}
              fill="rgba(255,255,255,0.6899999976158142)"
              fillOpacity={0.7011435688405797}
              strokeOpacity={0.7011435688405797}
              d="M12.00 24.00 C18.63 24.00 24.00 18.63 24.00 12.00 C24.00 5.37 18.63 0.00 12.00 0.00 C5.37 0.00 0.00 5.37 0.00 12.00 C0.00 18.63 5.37 24.00 12.00 24.00 Z"
            ></path>
          </svg>
          <svg
            viewBox="-1 -1 12 8"
            style={{
              position: "absolute",
              height: 8,
              width: 12,
              top: 10,
              left: 7,
              backgroundColor: "transparent",
              borderColor: "transparent"
            }}
          >
            <path
              strokeWidth={4}
              fill="transparent"
              stroke="rgba(255,255,255,1)"
              d="M2.00 2.07 L5.97 6.00 L10.00 2.00 "
            ></path>
          </svg>
        </Path1Stack>
      </Rect>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rect = styled.div`
  height: 24px;
  width: 24px;
  flex-direction: column;
  display: flex;
`;

const Path1Stack = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
`;

export default IcosArrowDown;
