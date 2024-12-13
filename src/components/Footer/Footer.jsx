"use client";
import { Box, HStack, Icon, Link, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import React from "react";

export default function Footer() {
  return (
    <Box
      className="borderAll"
      as="footer"
      width="100%"
      color="white"
      padding={{ base: "4", md: "8" }}
      textAlign="center"
    >
      <HStack
        className="borderAll"
        justify="center"
        spacing={{ base: "4", md: "8" }}
        padding={{ base: "0 0 4", md: "0 0 8" }}
      >
        <Link href="https://github.com/alyersin" isExternal draggable={false}>
          <Icon
            as={FaGithub}
            boxSize={{ base: "6", md: "8" }}
            _hover={{ color: "gray.400" }}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ersin-ali-228301107/"
          draggable={false}
          isExternal
        >
          <Icon
            as={FaLinkedin}
            boxSize={{ base: "6", md: "8" }}
            _hover={{ color: "blue.400" }}
          />
        </Link>
        <Link
          href="https://www.facebook.com/aly.ersin"
          isExternal
          draggable={false}
        >
          <Icon
            as={FaFacebook}
            boxSize={{ base: "6", md: "8" }}
            _hover={{ color: "blue.600" }}
          />
        </Link>
        <Link href="https://x.com/shase6" isExternal draggable={false}>
          <Icon
            as={FaTwitter}
            boxSize={{ base: "6", md: "8" }}
            _hover={{ color: "blue.500" }}
          />
        </Link>
      </HStack>

      <Text fontSize={{ base: "xs", md: "sm" }} mb="2">
        {" "}
        &copy; {new Date().getFullYear()} Ersin
      </Text>
    </Box>
  );
}
