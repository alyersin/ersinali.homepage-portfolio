"use client";
import { Box, Image } from "@chakra-ui/react";
import Contact from "./Contact/Contact";
import { useRef, useState } from "react";
import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection/RightSection";
import UnderSection from "./UnderSection/UnderSection";

export default function Main() {
  const [isFirstPageDark, setIsFirstPageDark] = useState(false);
  const secondPageRef = useRef(null);
  const firstPageRef = useRef(null);
  const thirdPageRef = useRef(null);

  const toggleFirstPageTheme = () => {
    setIsFirstPageDark((prev) => !prev);
  };

  return (
    <Box
      className="borderAllBlue"
      maxWidth="1280px"
      color="white"
      textAlign="center"
      mx="auto"
    >
      <Box className="borderAllBlue" display="flex" flexDirection="column">
        {/* LEFT AND RIGHT SECTIONS */}
        <Box display="flex" flexDirection="row" ref={firstPageRef}>
          <LeftSection isDark={isFirstPageDark} />
          <RightSection
            isDark={isFirstPageDark}
            toggleTheme={toggleFirstPageTheme}
            firstPageRef={firstPageRef}
            secondPageRef={secondPageRef}
          />

          {/* OVERLAPPING IMAGE */}
          <Image
            src="/coder-clipart.png"
            alt="Boy Working on Computer"
            position="absolute"
            top="17%"
            left={{
              base: "10%",
              md: "15%",
              lg: "20%",
            }}
            transform="translateY(-50%)"
            width={{ base: "150px", sm: "200px", md: "300px", lg: "400px" }}
            maxWidth={{
              base: "40%",
              md: "30%",
              lg: "25%",
            }}
            transition="all 0.5s ease-in-out"
            zIndex="10"
            pointerEvents="none"
          />
        </Box>

        {/* UNDER SECTION */}
        <Box className="borderAllBlue" id="projects" ref={secondPageRef}>
          <UnderSection
            firstPageRef={firstPageRef}
            thirdPageRef={thirdPageRef}
          />
        </Box>

        {/* CONTACT SECTION */}
        <Box className="borderAllRed" id="contact" ref={thirdPageRef}>
          <Contact secondPageRef={secondPageRef} />
        </Box>
      </Box>
    </Box>
  );
}
