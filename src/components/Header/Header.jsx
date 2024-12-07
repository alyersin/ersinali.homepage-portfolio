"use client";
import { Box, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      maxWidth="1280px"
      border="1px solid white"
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

      <Box></Box>
    </Box>
  );
}
