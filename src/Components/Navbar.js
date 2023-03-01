import React from "react";
import { FlexContainer, PaddingContainer } from "../Styles/Global.styled";
import { Logo, MenuIcon } from "../Styles/Navbar.styled";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <PaddingContainer
      top="1.2rem"
      bottom="1.2rem"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <FlexContainer justify="space-between" responsiveFlex>
        <Logo>
          Samiha<span>H</span>
        </Logo>

        <MenuIcon>
          <GiHamburgerMenu />
        </MenuIcon>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default Navbar;
