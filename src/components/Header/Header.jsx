"use client";
import { Box, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Box
      className="borderAll"
      display="flex"
      flexDirection="row"
      maxWidth="1280px"
      mx="auto"
      px={38}
      py={20}
      alignItems="center"
      justifyContent="space-between"
      padding={{ base: "0 20px", md: "0 80px" }}
      draggable={false}
    >
      <Link href="/" draggable={false}>
        <Box display="flex" alignItems="center">
          <Image
            src="/assets/logo-1.png"
            alt="Logo"
            width={230}
            height={60}
            draggable={false}
          />
        </Box>
      </Link>
      <Box className="borderAll" display="flex" flexDirection="row" gap={20}>
        {" "}
        <Text
          fontFamily="'Poppins', sans-serif"
          fontSize="0.8rem"
          fontWeight="600"
        >
          <Link href="/" textDecoration="none">
            ABOUT
          </Link>
        </Text>
        <Text
          fontFamily="'Poppins', sans-serif"
          fontSize="0.8rem"
          fontWeight="600"
        >
          <Link href="#skills" textDecoration="none">
            SKILLS
          </Link>
        </Text>
        <Text
          fontFamily="'Poppins', sans-serif"
          fontSize="0.8rem"
          fontWeight="600"
        >
          <Link href="/" textDecoration="none">
            EDUCATION
          </Link>
        </Text>
        <Text
          fontFamily="'Poppins', sans-serif"
          fontSize="0.8rem"
          fontWeight="600"
        >
          <Link href="#projects" textDecoration="none">
            PROJECTS
          </Link>
        </Text>
        <Text
          fontFamily="'Poppins', sans-serif"
          fontSize="0.8rem"
          fontWeight="600"
        >
          <Link href="/" textDecoration="none">
            BLOGS
          </Link>
        </Text>
        <Text
          fontFamily="'Poppins', sans-serif"
          fontSize="0.8rem"
          fontWeight="600"
        >
          <Link href="#contact" textDecoration="none">
            CONTACT
          </Link>
        </Text>
      </Box>
    </Box>
  );
}
