import React from "react";
import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
  Particle,
} from "../Styles/Global.styled";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";
import {
  ShowcaseImageCard,
  ShowcaseParticleContainer,
} from "../Styles/Showcase.styled";
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from "../Utilities/Variants";
import BackgroundImg from "../assets/particle.png";
import ShowcaseImg from "../assets/samiha.JPG";

const Showcase = () => {
  return (
    <PaddingContainer id="home" left="3%" right="10%" top="15%" bottom="10%">
      <FlexContainer align="center" fullWidthChild>
        <motion.div
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          {/* --left content-- */}
          <Heading as="h4" size="h4">
            Hello!
          </Heading>
          <Heading as="h1" size="h1" top="0.5rem" bottom="1rem">
            I'm <BlueText>Samiha</BlueText>
          </Heading>

          <Heading as="h3" size="h3">
            I'm a <BlueText>Software Developer</BlueText>
          </Heading>

          <ParaText as="p" top="2rem" bottom="4rem">
            Hello, my name is Samiha Hossain and I am a software developer with
            experience in creating and designing user-friendly websites and web
            applications.
          </ParaText>
          {/* icons */}
          <FlexContainer gap="20px" responsiveFlex>
            <IconContainer color="white" size="1.5rem">
              <BsLinkedin />
            </IconContainer>

            <IconContainer color="white" size="1.5rem">
              <BsGithub />
            </IconContainer>

            <IconContainer color="white" size="1.5rem">
              <BsYoutube />
            </IconContainer>
          </FlexContainer>
        </motion.div>
        {/* --right content-- */}
        <FlexContainer justify="flex-end">
          <ShowcaseParticleContainer
            as={motion.div}
            variants={fadeInRightVariant}
            initial="hidden"
            whileInView="visible"
          >
            <ShowcaseImageCard background={BackgroundImg}>
              <img src={ShowcaseImg} alt="showcase" />
            </ShowcaseImageCard>

            <Particle
              src={BackgroundImg}
              initialTop="-80px"
              initialLeft="20px"
              rotate="60deg"
            />
            <Particle
              src={BackgroundImg}
              initialTop="50px"
              initialRight="-70px"
              rotate="0deg"
            />
            <Particle
              src={BackgroundImg}
              initialBottom="10px"
              initialLeft="-70px"
              rotate="50deg"
            />
          </ShowcaseParticleContainer>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default Showcase;
