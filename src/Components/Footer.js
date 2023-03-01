import React from "react";
import {
  PaddingContainer,
  Heading,
  BlueText,
  FlexContainer,
  Button,
} from "../Styles/Global.styled";
import { ContactForm, FormLabel, FormInput } from "../Styles/Footer.styled";
import { motion } from "framer-motion";
import { fadeInBottomVariant } from "../Utilities/Variants";

const Footer = () => {
  return (
    <PaddingContainer top="5%" bottom="10%">
      <Heading
        as={motion.h4}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
        align="center"
      >
        MY CONTACT
      </Heading>

      <Heading
        as={motion.h4}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
        align="center"
        top="0.5rem"
      >
        Contact <BlueText>Me Here</BlueText>
      </Heading>

      <PaddingContainer top="3rem">
        <FlexContainer justify="center">
          <ContactForm
            as={motion.form}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible"
          >
            <PaddingContainer bottom="2rem">
              <FormLabel>Name:</FormLabel>
              <FormInput type="text" placeholder="Enter your name" />
            </PaddingContainer>

            <PaddingContainer bottom="2rem">
              <FormLabel>Email:</FormLabel>
              <FormInput type="email" placeholder="Enter your email" />
            </PaddingContainer>

            <PaddingContainer bottom="2rem">
              <FormLabel>Message:</FormLabel>
              <FormInput as="textarea" placeholder="Enter your email" />
            </PaddingContainer>

            <FlexContainer justify="center" responsiveFlex>
              <Button>Send Message</Button>
            </FlexContainer>
          </ContactForm>
        </FlexContainer>
      </PaddingContainer>
    </PaddingContainer>
  );
};

export default Footer;
