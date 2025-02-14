"use client";
import { Box, Image } from "@chakra-ui/react";
import Contact from "./Contact/Contact";
import { useRef, useState } from "react";
import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection/RightSection";
import UnderSection from "./UnderSection/UnderSection";
import Lamp from "../Lamp/Lamp";

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
      maxWidth="1280px"
      color="white"
      textAlign="center"
      mx="auto"
      position="relative"
    >
      <Box display="flex" flexDirection="column">
        {/* LEFT AND RIGHT SECTIONS */}
        <Box display="flex" flexDirection="row" ref={firstPageRef}>
          <LeftSection isDark={isFirstPageDark} />
          <RightSection
            isDark={isFirstPageDark}
            toggleTheme={toggleFirstPageTheme}
            firstPageRef={firstPageRef}
            secondPageRef={secondPageRef}
          />

          {/* LAMP COMPONENT */}
          <Box
            position="absolute"
            margin="auto"
            top={{
              md: "5%",
            }}
            left={{
              base: "14%",
              md: "6.1%",
            }}
            transform={{
              base: "translate(-50%, 0)",
              md: "translate(-50%, -50%)",
            }}
            zIndex="11"
            width={{ base: "120px", md: "150px", lg: "200px" }}
          >
            <Lamp isLightOn={isFirstPageDark} />
          </Box>

          {/* OVERLAPPING IMAGE */}
          <Image
            src="/coder-clipart.png"
            alt="Boy Working on Computer"
            position="absolute"
            top="17%"
            left={{
              base: "0%",
              lg: "2%",
            }}
            transform="translateY(-50%)"
            width={{
              base: "150px", // SMALL
              sm: "200px", // TABLETS
              md: "300px", // MEDIUM
              lg: "500px", // LARGER
              xl: "600px", // XL
            }}
            maxWidth={{
              base: "40%", // SMALL
              md: "30%", // MEDIUM
              lg: "35%", // LARGER
              xl: "40%", // XL
            }}
            transition="all 0.5s ease-in-out"
            zIndex="10"
            pointerEvents="none"
          />
        </Box>

        {/* UNDER SECTION */}
        <Box
          id="projects"
          ref={secondPageRef}
          // borderTop={{ base: "none", md: "3px solid black" }}
        >
          <UnderSection
            firstPageRef={firstPageRef}
            thirdPageRef={thirdPageRef}
          />
        </Box>

        {/* CONTACT SECTION */}
        <Box id="contact" ref={thirdPageRef}>
          <Contact secondPageRef={secondPageRef} />
        </Box>
      </Box>
    </Box>
  );
}
