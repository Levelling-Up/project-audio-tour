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
    <Container>
      <NavbarContainer>
        <HomeIcon>
          <img className="home-button" src={homelinkWhite} />
        </HomeIcon>
        <LanguageButton className="language-button" {...buttonProps}>
          Language
        </LanguageButton>
        <div className={isOpen ? "visible" : ""} role="menu">
          <a {...itemProps[0]} href="https://example.com">
            <img className="british-flag" src="britishFlag.png" alt="British flag" />
          </a>
          <a {...itemProps[1]} onClick={handleClick}>
            <img className="french-flag" src="frenchFlag.png" alt="French flag" />
          </a>
        </div>
      </NavbarContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NavbarContainer = styled(Container)`
  justify-content: space-between;
  background-color: #282c34;
  padding-top: 20px;
`;

const HomeIcon = styled.a`
  display: flex;
  width: 25px;
  margin-left: 5px;
`;

const LanguageButton = styled.a`
  display: flex;
  flex-direction: column;
`;

const LanguageFlag = styled.a`
  width: 35px;
  margin-top: 5px;
  margin-right: 5px;
`;

export default Navbar;
