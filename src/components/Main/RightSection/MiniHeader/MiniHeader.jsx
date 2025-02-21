import {
  Box,
  Link,
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
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";

export default function MiniHeader({ toggleTheme, isDarkMode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      display="flex"
      justifyContent={{ base: "end", md: "center" }}
      alignItems="center"
      height="24"
      position="relative"
    >
      <Box
        position="absolute"
        top="10px"
        right="10px"
        zIndex="1001"
        display="flex"
      >
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        {/* <ToggleSwitch onChange={toggleTheme} isChecked={isDarkMode} /> */}
      </Box>

      <IconButton
        aria-label="Open menu"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        position="fixed"
        top="50%"
        right="-20px"
        transform="translateY(-50%)"
        borderRadius="2px"
        boxShadow="lg"
        zIndex="1000"
        backgroundColor="gray.700"
        color="white"
        _hover={{ bg: "gray.600" }}
        onMouseEnter={onOpen}
        onTouchStart={onOpen}
      />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" opacity="80%" maxWidth={40}>
            <DrawerCloseButton />
            <DrawerBody>
              <Box as="nav">
                <Link href="/" color="teal.300" display="block" mb={2}>
                  About
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
