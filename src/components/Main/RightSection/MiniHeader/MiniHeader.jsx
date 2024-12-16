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

export default function MiniHeader({ toggleTheme }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      className="borderAll"
      display="flex"
      justifyContent={{ base: "end", md: "center" }}
      alignItems={{ base: "center", md: "center" }}
      height={{ base: "24", md: "24" }}
      position="relative"
    >
      <Box
        className="borderAllRed"
        display={{ base: "none", md: "flex" }}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        ml={{ base: 0, md: 36 }}
        height={{ base: "24", md: "24" }}
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

        <Box className="borderAll" ml={{ base: 0, md: 14 }}>
          <ToggleSwitch onChange={toggleTheme} />
        </Box>
      </Box>

      <IconButton
        className="borderAllRed"
        aria-label="Open menu"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        display="flex"
        position="fixed"
        top="50%"
        right="-20px"
        transform="translateY(-50%)"
        borderRadius="full"
        boxShadow="lg"
        zIndex="1000"
        backgroundColor="gray.700"
        color="white"
        _hover={{ bg: "gray.600" }}
        onMouseEnter={onOpen}
        onTouchStart={onOpen}
      />

      {/* Drawer */}
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
