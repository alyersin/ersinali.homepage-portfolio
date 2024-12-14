"use client";
import { Box } from "@chakra-ui/react";
import Contact from "./Contact/Contact";
import { keyframes } from "@emotion/react";
import { useRef } from "react";
import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection/RightSection";
import UnderSection from "./UnderSection/UnderSection";
import "/src/app/globals.css";

const shakeArrowDown = keyframes`
  0% { transform: translateY(0); }
  25% { transform: translateY(-5px); }
  50% { transform: translateY(5px); }
  75% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

const shakeArrowUp = keyframes`
  0% { transform: translateY(0); }
  25% { transform: translateY(5px); }
  50% { transform: translateY(-5px); }
  75% { transform: translateY(5px); }
  100% { transform: translateY(0); }
`;

export default function Main() {
  const secondPageRef = useRef(null);
  const firstPageRef = useRef(null);
  const thirdPageRef = useRef(null);

  const handleScrollDown = () => {
    secondPageRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollUp = () => {
    firstPageRef.current.scrollIntoView({ behavior: "smooth" });
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
        <Box display="flex" flexDirection="row" ref={firstPageRef}>
          <LeftSection />
          <RightSection
            firstPageRef={firstPageRef}
            secondPageRef={secondPageRef}
          />
        </Box>
        <Box className="borderAllBlue" id="projects" ref={secondPageRef}>
          <UnderSection
            firstPageRef={firstPageRef}
            thirdPageRef={thirdPageRef}
          />
        </Box>

        <Box className="borderAllRed" id="contact" ref={thirdPageRef}>
          <Contact secondPageRef={secondPageRef} />
        </Box>
      </Box>
    </Box>
  );
}
