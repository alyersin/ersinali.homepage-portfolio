// import styles from "./page.module.css";
"use client";
import Main from "@/components/Main/Main";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      // border="1px solid black"
      gap="30px"
      alignItems="center"
      justifyContent="center"
      maxWidth="1280px"
      mx="auto"
      textAlign="center"
      p={4}
    >
      <Main />
    </Box>
  );
}
