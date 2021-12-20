import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
      I am from 🇵🇰 finding my ways as a student in 🇺🇸.
Junior @ DePauw University majoring in CS and aspire to be a Software Engineer. I love everything techy and LOVE Web Development. I am a React fanatic, but love to learn everything new.
      </SectionText>
      <Button onClick ={() => window.location = 'https://www.linkedin.com/in/huzaifaehsan/'}>Connect W/Me</Button>
    </LeftSection>
  </Section>

);

export default Hero;