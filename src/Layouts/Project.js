import React from "react";

import {
  PaddingContainer,
  Heading,
  FlexContainer,
  ParaText,
  IconContainer,
  Button,
} from "../Styles/Global.styled";
import {
  ProjectContentContainer,
  ProjectImageContainer,
  TechStackCard,
  ProjectImage,
} from "../Styles/MyProjects.styled";
import Project1 from "../assets/Project1.png";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from "../Utilities/Variants";

const Project = ({ rowReverse }) => {
  return (
    <FlexContainer rowReverse={rowReverse ? true : false} fullWidthChild>
      <ProjectContentContainer
        as={motion.div}
        variants={rowReverse ? fadeInRightVariant : fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
      >
        <div>
          <FlexContainer align="center" gap="1rem">
            <Heading as="h3" size="h3" bottom="1rem">
              Project Name
            </Heading>
            <IconContainer color="blue" size="2rem">
              <FaGithub />
            </IconContainer>
          </FlexContainer>

          <PaddingContainer top="1rem">
            <FlexContainer gap="1.5rem">
              <TechStackCard>Technology</TechStackCard>
            </FlexContainer>
          </PaddingContainer>
        </div>
      </ProjectContentContainer>
    </FlexContainer>
  );
};

export default Project;
