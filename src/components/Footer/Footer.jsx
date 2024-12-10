"use client";
import { Box, HStack, Icon, Link, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

import React from "react";

export default function Footer() {
  return (
    <div>
      <Box
        className="borderAll"
        as="footer"
        width="100%"
        bg="gray.900"
        color="white"
        padding="16px"
        textAlign="center"
      >
        <HStack justify="center" spacing="20px" padding="0 0 80px 0">
          <Link
            href="https://github.com/alyersin"
            isexternal="true"
            draggable={false}
          >
            <Icon as={FaGithub} boxSize="28" _hover={{ color: "gray.400" }} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ersin-ali-228301107/"
            draggable={false}
          >
            <Icon as={FaLinkedin} boxSize="28" _hover={{ color: "blue.400" }} />
          </Link>
          <Link
            href="https://www.facebook.com/aly.ersin"
            isexternal="true"
            draggable={false}
          >
            <Icon as={FaFacebook} boxSize="28" _hover={{ color: "blue.600" }} />
          </Link>
          <Link href="https://x.com/shase6" isexternal="true" draggable={false}>
            <Icon as={FaTwitter} boxSize="28" _hover={{ color: "blue.500" }} />
          </Link>
        </HStack>

        <Text fontSize=".7rem" mb="8px">
          &copy; {new Date().getFullYear()} Ersin
        </Text>
      </Box>
    </div>
  );
}
