import React, { useState } from "react";
import styled from "styled-components";
import homelinkWhite from "./../assets/images/homelinkWhite.png";
import britishFlag from "./../assets/images/britishFlag.png";
import frenchFlag from "./../assets/images/frenchFlag.png";

function Navbar(props) {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [language, setLanguage] = useState("English");  

  const toggleDropdown = () => {
    if (displayDropdown === false) {
      setDisplayDropdown(true);
    } else {
      setDisplayDropdown(false);
    }
  };

  const selectLanguage = () => {
    if (language === "English") {
    setLanguage("French");
    } else {
      setLanguage("English")
    }
    console.log(language)
  };

  return (
    <StyledUl>
      <HomeIcon>
        <img src={homelinkWhite} />
      </HomeIcon>

      <DropDownList onClick={() => toggleDropdown()}>
        <Dropbtn>Languages</Dropbtn>
        <DropDownContent>
          {displayDropdown && (
            <>
              <English
                onClick={() => selectLanguage("English")}
                className={`${language === "English" ? "selected" : ""}`}
              >
                <img src={britishFlag} alt="British flag" />
              </English>
              <French
                onClick={() => selectLanguage("French")}
                className={`${language === "French" ? "selected" : ""}`}
              >
                <img src={frenchFlag} alt="French flag" />
              </French>
            </>
          )}
        </DropDownContent>
      </DropDownList>
    </StyledUl>
  );
}

const StyledUl = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #333;
`;

const HomeIcon = styled.a`
  display: flex;
  img {
    height: 30px;
    margin: 5px;
  }
`;

const StyledLi = styled.li`
  display: flex;
  justify-content: center;
`;

const Dropbtn = styled.div`
  display: flex;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

const DropDownContent = styled.div`
  display: flex;
  position: absolute;
  background-color: #f9f9f9;
  width: 100px;
`;

const DropDownList = styled(StyledLi)`
  display: inline-block;
  &:hover {
    background-color: grey;
  }
  &:hover ${DropDownContent} {
    display: flex;
  }
`;

const English = styled.a`
  img {
    height: 30px;
    margin-top: 5px;
    margin-right: 5px;
  }
  &:hover {
    opacity: 0.8;
  }
  &.selected {
    border: 2px solid blue;
  }
`;

const French = styled.a`
  img {
    height: 30px;
    margin-left: 5px;
  }
  &:hover {
    opacity: 0.8;
  }
  &.selected {
    border: 2px solid blue;
  }
`;

export default Navbar;
