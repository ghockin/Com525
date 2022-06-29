import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./NavBar.style";

import LogoImage from '../logo.png'


function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> Home</NavbarLink>
            <NavbarLink to="/LoginFormApp"> Login Form</NavbarLink>
            <NavbarLink to="/Checkbox"> Checkbox</NavbarLink>
            <NavbarLink to="/ImageSlider"> Image Slider</NavbarLink>
            <NavbarLink to="/NavBarDoc"> Navigation Bar</NavbarLink>
            <NavbarLink to="/Popup"> Modal</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={LogoImage}></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/LoginForm"> Login Form</NavbarLinkExtended>
          <NavbarLinkExtended to="/Checkbox"> Checkbox</NavbarLinkExtended>
          <NavbarLinkExtended to="/ImageSlider"> Image Slider</NavbarLinkExtended>
          <NavbarLinkExtended to="/NavBarDoc"> Navigation Bar</NavbarLinkExtended>
          <NavbarLinkExtended to="/Popup"> Modal</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;