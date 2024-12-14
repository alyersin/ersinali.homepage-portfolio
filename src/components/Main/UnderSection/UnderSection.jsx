import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import ArrowScrollUp from "@/components/ArrowScroll/ArrowScrollUp";
import ArrowScrollDown from "@/components/ArrowScroll/ArrowScrollDown";
import AccordionCards from "@/components/AccordionCards/AccordionCards";

export default function UnderSection({ firstPageRef, thirdPageRef }) {
  return (
    <Box
      className="borderAllRed"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignContent="center"
      textAlign="center"
      height="100vh"
      width="100%"
      bg="#000814"
    >
      <Box margin={"auto"} mt="40px">
        <ArrowScrollUp firstPageRef={firstPageRef} />
      </Box>

      {/* PROJECTS */}
      <Box margin="0 0 30px 0">
        <Heading
          id="projects"
          fontSize={{ base: "2xl", md: "3xl" }}
          color="#149AD7"
          mb={6}
        >
          My Projects
        </Heading>
        <AccordionCards />
      </Box>

      <Box margin={"auto"} mb="40px">
        <ArrowScrollDown thirdPageRef={thirdPageRef} />
      </Box>
    </Box>
  );
}
