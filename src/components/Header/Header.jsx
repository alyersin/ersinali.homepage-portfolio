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
      {/* Logo */}
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

      {/* Navigation Links */}
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

      {/* Hamburger Icon for Mobile */}
      <IconButton
        className="hamburger-icon"
        aria-label="Open menu"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        display={{ base: "flex", md: "none" }}
        flexDirection="column"
      />

      {/* Drawer for Mobile Navigation */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Box as="nav">
                <Link href="/" color="teal.300" display="block" mb={2}>
                  About
                </Link>
                <Link href="#skills" color="teal.300" display="block" mb={2}>
                  Skills
                </Link>
                <Link href="#projects" color="teal.300" display="block" mb={2}>
                  Projects
                </Link>
                <Link href="#contact" color="teal.300" display="block" mb={2}>
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
