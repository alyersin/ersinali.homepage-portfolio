import Lamp from "@/components/Lamp/Lamp";
import { Box, Link, Image } from "@chakra-ui/react";
import React from "react";

export default function LeftSection({ isDark }) {
  return (
    <Box
      className="borderAllBlue"
      height="100vh"
      width="35%"
      bg={
        isDark
          ? "#1a202c"
          : "radial-gradient(circle, rgba(237,228,232,1) 0%, rgba(148,187,233,1) 100%)"
      }
    ></Box>
  );
}
