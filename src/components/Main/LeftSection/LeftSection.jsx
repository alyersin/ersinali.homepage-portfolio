import { Box, Heading, Link, Image, useColorMode } from "@chakra-ui/react";
import React from "react";

export default function LeftSection() {
  const { colorMode } = useColorMode();

  return (
    <Box
      className="borderAll"
      height="100vh"
      width="35%"
      bg={colorMode === "light" ? "#8d99ae" : "#2d3748"} // Dynamic background color
    >
      <Link href="/" draggable={false}>
        <Box
          className="borderAll"
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="24"
        >
          <Image
            className="borderAll"
            src="/assets/logo-1.png"
            alt="Logo"
            width={{ base: "180px", md: "220px" }}
            height={{ base: "46px", md: "56px" }}
            draggable={false}
          />
        </Box>
      </Link>
    </Box>
  );
}
