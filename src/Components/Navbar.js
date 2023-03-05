import React, { useState } from "react";
import {
  Container,
  FlexContainer,
  PaddingContainer,
} from "../Styles/Global.styled";
import { NavbarContainer, Logo, MenuIcon } from "../Styles/Navbar.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import NavMenu from "../Layouts/NavMenu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <NavbarContainer bgcolor="transparent">
      <PaddingContainer top="1.2rem" bottom="1.2rem">
        <Container>
          <FlexContainer justify="space-between">
            <Logo>
              Samiha<span>H</span>
            </Logo>

            <MenuIcon
              onClick={() => {
                setOpenMenu(true);
              }}
            >
              <GiHamburgerMenu />
            </MenuIcon>
          </FlexContainer>
        </Container>

        {openMenu && <NavMenu />}
      </PaddingContainer>
    </NavbarContainer>
  );
};

export default Navbar;
