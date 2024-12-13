"use client";
import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Image,
  Link,
  Text,
  IconButton,
  DrawerCloseButton,
  DrawerBody,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import "/src/app/globals.css";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (e, target) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      document.querySelector(target).scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <Box
      as="header"
      className="borderAll"
      display="flex"
      flexDirection="row"
      maxWidth="1280px"
      mx="auto"
      px={4}
      py={5}
      alignItems="center"
      justifyContent="space-between"
      color="white"
      draggable={false}
    >
      <Link href="/" draggable={false}>
        <Box display="flex" alignItems="center">
          <Image
            src="/assets/logo-1.png"
            alt="Logo"
            width={{ base: "180px", md: "220px" }}
            height={{ base: "46px", md: "56px" }}
            draggable={false}
          />
        </Box>
      </Link>

      <Box
        className="borderAll"
        display={{ base: "none", md: "flex" }}
        flexDirection="row"
        gap={5}
      >
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

      <IconButton
        className="hamburger-icon"
        aria-label="Open menu"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        display={{ base: "flex", md: "none" }}
        flexDirection="column"
      />

      {/* DRAWER */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay className="borderAllBlue">
          <DrawerContent
            className="borderAll"
            bg="gray.800"
            opacity="80%"
            maxWidth={40}
          >
            <DrawerCloseButton />
            <DrawerBody>
              <Box as="nav">
                <Link
                  href="/"
                  color="teal.300"
                  display="block"
                  mb={2}
                  onClick={(e) => handleClick(e, "#about")}
                >
                  About
                </Link>
                <Link
                  href="#skills"
                  color="teal.300"
                  display="block"
                  mb={2}
                  onClick={(e) => handleClick(e, "#skills")}
                >
                  Skills
                </Link>
                <Link
                  href="#projects"
                  color="teal.300"
                  display="block"
                  mb={2}
                  onClick={(e) => handleClick(e, "#projects")}
                >
                  Projects
                </Link>
                <Link
                  href="#contact"
                  color="teal.300"
                  display="block"
                  mb={2}
                  onClick={(e) => handleClick(e, "#contact")}
                >
                  Contact
                </Link>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}
