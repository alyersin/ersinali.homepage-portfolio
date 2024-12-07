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
        <Text fontFamily="'Poppins', sans-serif" fontSize="lg" fontWeight="800">
          <Link href="/" textDecoration="none">
            About
          </Link>
        </Text>
        <Text fontFamily="'Poppins', sans-serif" fontSize="lg" fontWeight="800">
          <Link href="#projects" textDecoration="none">
            Projects
          </Link>
        </Text>
        <Text fontFamily="'Poppins', sans-serif" fontSize="lg" fontWeight="800">
          <Link href="#contact" textDecoration="none">
            Contact
          </Link>
        </Text>
      </Box>
    </Box>
  );
}
