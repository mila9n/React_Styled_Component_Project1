import React from "react";
import SocialIcon from "./SocialIcon";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img
          src="https://raw.githubusercontent.com/bradtraversy/huddle_styled_components/6033c3b282d305910a8b1424f80e2f31f629d653/public/images/logo_white.svg"
          alt=""
        />
        <Flex>
          <ul>
            <li>
              KJLDSFKLjlk klfkl kljafkl klflasl kljsdklfjklsjklljiouiojsdklfjkl
              klsljsdfj,sdj kljklsf
            </li>
            <li>+1-324-3423-34</li>
            <li>example@gmail.com</li>
          </ul>
          <ul>
            <li>About us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcon />
        </Flex>

        <p>&Copy; 2021 Huddle, All rights reserved</p>
      </Container>
    </StyledFooter>
  );
}
