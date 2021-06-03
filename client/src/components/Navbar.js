import React from "react";
import styled from "styled-components";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import homelinkWhite from "./../assets/images/homelinkWhite.png";
import britishFlag from "./../assets/images/britishFlag.png";
import frenchFlag from "./../assets/images/frenchFlag.png";

function Navbar() {
  const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(2);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("This was clicked");
  };

  return (
    <NavbarContainer>
      <HomeIcon>
        <img className="home-button" src={homelinkWhite} alt="Home" />
      </HomeIcon>
      <LanguageButton className="language-button" {...buttonProps}>
        Language
        <LanguageItems className={isOpen ? "visible" : ""} role="menu">
            <British>
              <a {...itemProps[0]} href="https://example.com">
                <img className="british-flag" src={britishFlag} height="25" alt="British flag" />
              </a>
            </British>
            <French>
            <a {...itemProps[1]} onClick={handleClick}>
              <img className="french-flag" src={frenchFlag} height="25" alt="French flag" />
            </a>
            </French>
        </LanguageItems>
      </LanguageButton>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #282c34;
`;

const HomeIcon = styled.a`
  display: flex;
  width: 30px;
  margin: 5px;
`;

const LanguageButton = styled.a`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 5px;
  color: white;
`;

const LanguageItems = styled.div`
  display: flex;
  flex-direction: row;
`;

const British = styled.a`
  display: flex;
  height: 10px;
  margin-top: 5px;
  margin-right: 6px;
`;

const French = styled.a`
  display: flex;
  height: 10px;
  margin-top: 5px;
`;

export default Navbar;
