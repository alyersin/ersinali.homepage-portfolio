"use client";
import { Button } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function ThemeToggle({ isDarkMode, toggleTheme }) {
  return (
    <Button
      onClick={toggleTheme}
      colorScheme="teal"
      variant="ghost"
      fontSize={24}
      boxSize={10}
    >
      {isDarkMode ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}
