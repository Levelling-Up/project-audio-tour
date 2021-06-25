import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import homelinkWhite from "./../assets/images/homelinkWhite.png";
import britishFlag from "./../assets/images/britishFlag.png";
import frenchFlag from "./../assets/images/frenchFlag.png";

function Navbar({language, handleLanguage}) {
  const [displayDropdown, setDisplayDropdown] = useState(false);
    

  const toggleDropdown = () => {
    if (displayDropdown === false) {
      setDisplayDropdown(true);
    } else {
      setDisplayDropdown(false);
    }
  };

  return (
    <StyledUl>
      <HomeIcon to="/">
        <img src={homelinkWhite} alt="home"/>
      </HomeIcon>

      <DropDownList>
        <Dropbtn onClick={() => toggleDropdown()}>Languages</Dropbtn>
        <DropDownContent>
          {displayDropdown && (
            <>
              <English
                onClick={() => { 
                  handleLanguage("english"); 
                  console.log(language)} }
                className={`${language === "english" ? "selected" : ""}`}
              >
                <img src={britishFlag} alt="British flag" />
              </English>
              <French
                onClick={() => {
                  handleLanguage("french");
                  console.log(language)}}
                className={`${language === "french" ? "selected" : ""}`}
              >
                <img src={frenchFlag} alt="french flag" />
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
  background-color: rgb(33, 97, 140);
`;

const HomeIcon = styled(Link)`
  display: flex;
  img {
    height: 30px;
    margin: 5px;
  }
  &:hover {
    background-color: rgb(40, 116, 166);
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
    border: 2px solid rgb(52, 152, 219);
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
    border: 2px solid rgb(52, 152, 219);
  }
`;

export default Navbar;
