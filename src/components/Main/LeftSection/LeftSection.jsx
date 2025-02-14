import Lamp from "@/components/Lamp/Lamp";
import { Box, Link, Image } from "@chakra-ui/react";
import React from "react";

export default function LeftSection({ isDark }) {
  return (
    <Box
      className="borderAllBlue"
      height="100vh"
      width="35%"
      // bgImage="url('/assets/left-section-4.jpg')"
      // bgSize="cover"
      // bgRepeat="no-repeat"
      // opacity={0.2}
      bg={
        isDark
          ? "#1a202c"
          : "radial-gradient(circle, rgba(237,228,232,1) 0%, rgba(148,187,233,1) 100%)"
      }
    >
      {/* <Box>
        <Lamp isLightOn={isDark} />
      </Box> */}

      {/* <Link href="/" draggable={false}>
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
      </Link> */}
    </Box>
  );
}
