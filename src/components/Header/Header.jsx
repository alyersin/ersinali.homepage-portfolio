"use client";
import {
  Box,
  color,
  Image,
  Link,
  Text,
  textDecoration,
} from "@chakra-ui/react";
import React from "react";
import "/src/app/globals.css";
import { hoverAction } from "@use-gesture/react";

export default function Header() {
  return (
    <Box
      as="header"
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
            width={220}
            height={56}
            draggable={false}
          />
        </Box>
      </Link>
      <Box className="borderAll" display="flex" flexDirection="row" gap={20}>
        {" "}
        <Text className="header-fonts">
          <Link href="/" textDecoration="none">
            ABOUT
          </Link>
        </Text>
        <Text className="header-fonts">
          <Link href="#skills" textDecoration="none">
            SKILLS
          </Link>
        </Text>
        <Text className="header-fonts">
          <Link href="/" textDecoration="none">
            EDUCATION
          </Link>
        </Text>
        <Text className="header-fonts">
          <Link href="#projects" textDecoration="none">
            PROJECTS
          </Link>
        </Text>
        <Text className="header-fonts">
          <Link href="/" textDecoration="none">
            BLOGS
          </Link>
        </Text>
        <Text className="header-fonts">
          <Link href="#contact" textDecoration="none">
            CONTACT
          </Link>
        </Text>
      </Box>
    </Box>
  );
}
