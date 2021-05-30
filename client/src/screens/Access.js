import React from "react";
import styled from "styled-components";

function Access(props) {
  return (
    <Container>
      <Group2>
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
          <Text>LUCS</Text>
        </Group>
        <Group>
        <Group3>
          <AccessCodeLabel for="access-code">Enter Your access code:</AccessCodeLabel>
          <AccessCode name="access-code" type="text" value="000000001"></AccessCode>
          <Text>Or scan your QR code here:</Text>
        </Group3>
        </Group>
        
      </Group2>
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

const Group2 = styled.div`
  height: 156px;
  width: 297px;
  flex-direction: column;
  display: flex;
  margin-top: 150px;
  align-items: center;
`;

const Group = styled.div`
  height: 65px;
  width: 333px;
  flex-direction: column;
  display: flex;
  align-items: center;
`;

const Group3 = styled.div`
  height: 65px;
  width: 333px;
  flex-direction: column;
  display: flex;
`;

const ElementsImgArtist = styled.div`
  height: 32px;
  width: 33px;
  flex-direction: column;
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  font-family: Arial;
  color: rgba(254,248,238,1);
  text-align: center;
  font-size: 17px;
  margin: 16px;
  padding: 8px;
  box-shadow: 0px 2px 5px  1px rgba(254,248,238,0.6788100090579711) ;
`;

const AccessCode = styled.input`
  font-family: Arial;
  height: 80px;
  width: 297px;
  color: rgba(254,248,238,1);
  text-align: center;
  font-size: 14px;
  letter-spacing: -0.1944444px;
  box-shadow: 0px 2px 5px  1px rgba(254,248,238,0.6788100090579711) ;
  padding: 16px;
`;

const AccessCodeLabel = styled.label`
  font-family: Arial;
  height: 80px;
  width: 297px;
  color: rgba(254,248,238,1);
  text-align: left;
  font-size: 14px;
  margin-top: 42px;
  letter-spacing: -0.1944444px;
`;


export default Access;
