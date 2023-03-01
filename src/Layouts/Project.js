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
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from "../Utilities/Variants";

const Project = ({ data, rowReverse }) => {
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
              {data.project_name}
            </Heading>
            <IconContainer color="blue" size="2rem">
              <FaGithub />
            </IconContainer>
          </FlexContainer>

          <PaddingContainer top="1rem">
            <FlexContainer gap="1.5rem">
              {data.tech_stack.map((stack) => (
                <TechStackCard>{stack}</TechStackCard>
              ))}
            </FlexContainer>
          </PaddingContainer>
          <ParaText top="1.5rem" bottom="2rem">
            {data.project_desc}
          </ParaText>
          <Button>Visit Website</Button>
        </div>
      </ProjectContentContainer>

      <ProjectImageContainer
        justify={rowReverse ? "flex-start" : "flex-end"}
        as={motion.div}
        variants={rowReverse ? fadeInLeftVariant : fadeInRightVariant}
        initial="hidden"
        whileInView="visible"
      >
        <ProjectImage src={data.project_img} alt="data.project_name" />
      </ProjectImageContainer>
    </FlexContainer>
  );
};

export default Project;
