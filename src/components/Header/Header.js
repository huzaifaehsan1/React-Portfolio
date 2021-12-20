import Link from 'next/link';
import React from 'react';
import { AiFillBook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
      <a style={{display: "flex" , alignItems: "center", color: 'white', marginBottom: "20px" }}>
        <DiCssdeck size="3rem" /> <Span>Huzaifa Ehsan</Span>
      </a>
      </Link>
    </Div1>
    <Div2>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
      <Link href="#tech">
        <NavLink>Techologies</NavLink>
      </Link>
      <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/huzaifaehsan1">
        <AiFillGithub size = "3rem" />
      </SocialIcons>
      {/* <SocialIcons href="https://huzaifaehsan1.github.io/Portfolio-/Resume-1-converted.pdf">
        <AiFillBook size = "3rem" />
      </SocialIcons> */}
      <SocialIcons href="https://www.linkedin.com/in/huzaifaehsan/">
        <AiFillLinkedin size = "3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/huzaifaehsan/">
        <AiFillInstagram size = "3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
