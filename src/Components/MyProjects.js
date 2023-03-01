import React from "react";
import { PaddingContainer, Heading, BlueText } from "../Styles/Global.styled";
import { motion } from "framer-motion";
import Project from "../Layouts/Project";
import { fadeInTopVariant } from "../Utilities/Variants";

import { projectDetails } from "../Utilities/Data";
const MyProjects = () => {
  return (
    <PaddingContainer
      id="Projects"
      top="5%"
      bottom="5%"
      responsiveTop="20%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <Heading
        as={motion.h4}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
      >
        MY PROJECTS
      </Heading>
      <Heading
        as={motion.h4}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
        top="0.5rem"
      >
        What <BlueText>I have built</BlueText>
      </Heading>
      {projectDetails.map((project) => (
        <PaddingContainer top="5rem" bottom="5rem">
          <Project />
        </PaddingContainer>
      ))}
    </PaddingContainer>
  );
};

export default MyProjects;
