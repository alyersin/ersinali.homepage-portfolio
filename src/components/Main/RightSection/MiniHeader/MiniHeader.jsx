import {
  Box,
  Link,
  Text,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";

export default function MiniHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box className="borderAll">
      <Box
        className="borderAll"
        display={{ base: "none", md: "flex" }}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        height="24"
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
          <Link href="#projects" textDecoration="none">
            PROJECTS
          </Link>
        </Text>
        <Text className="header-fonts">
          <Link href="#contact" textDecoration="none">
            CONTACT
          </Link>
        </Text>

        <ToggleSwitch />
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
