import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:765-248-4441'>765-248-4441</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:huzaifaehsan_2023@depauw.edu'>huzaifaehsan_2023@depauw.edu</LinkItem>
        </LinkColumn>
      </LinkList>
      <CompanyContainer>
        <Slogan>
          Inverting The Normal
        </Slogan>
      </CompanyContainer>
      <SocialContainer>
      <SocialIcons href="https://github.com/huzaifaehsan1">
        <AiFillGithub size = "3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/huzaifaehsan/">
        <AiFillLinkedin size = "3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/huzaifaehsan/">
        <AiFillInstagram size = "3rem" />
      </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
