import React, { useState } from "react";
import styled from "styled-components";
import homelinkWhite from "./../assets/images/homelinkWhite.png";
import britishFlag from "./../assets/images/britishFlag.png";
import frenchFlag from "./../assets/images/frenchFlag.png";
import noun_lang from "./../assets/images/noun_Language_2035628.svg";

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

  const selectLanguage = (lang) => {
    setLanguage(lang);
    console.log(language);
  };

  return (
    <StyledUl>
      <HomeIcon>
        <img src={homelinkWhite} alt="home"/>
      </HomeIcon>

      <DropDownList>
        <Dropbtn onClick={() => toggleDropdown()}></Dropbtn>
        <DropDownContent>
          {displayDropdown && (
            <>
              <English
                onClick={() => setLanguage("English")}
                className={`${language === "English" ? "selected" : ""}`}
              >
                <img src={britishFlag} alt="British flag" />
              </English>
              <French
                onClick={() => setLanguage("French")}
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
  background-color: rgba(29,27,37,1);
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
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  background: url(${noun_lang}) no-repeat;
  background-size: 100%;
`;

const DropDownContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #f9f9f9;
  right: 0px;
  width: 50px;
  z-index: 5;
`;

const DropDownList = styled(StyledLi)`
  display: inline-block;
  &:hover {
    background-color: grey;
  }
  &:hover ${DropDownContent} {
    
  }
`;

const English = styled.a`
  img {
    height: 30px;
    margin: 5px;
  }
  &:hover {
    opacity: 0.5;
  }
  &.selected {
    border: 2px solid blue;
  }
`;

const French = styled.a`
  img {
    height: 30px;
    margin: 5px;
  }
  &:hover {
    opacity: 0.5;
  }
  &.selected {
    border: 2px solid blue;
  }
`;

export default Navbar;
