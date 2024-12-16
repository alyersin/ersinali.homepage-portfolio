import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import React, { useState } from "react";
import ArrowScrollUp from "@/components/ArrowScroll/ArrowScrollUp";
import ArrowScrollDown from "@/components/ArrowScroll/ArrowScrollDown";
import AccordionCards from "@/components/AccordionCards/AccordionCards";
import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";

export default function UnderSection({ firstPageRef, thirdPageRef }) {
  const [isGradientReversed, setIsGradientReversed] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [isDirectionLeft, setIsDirectionLeft] = useState(true);

  const waveAnimation = keyframes`
    0% { transform: translateX(${isDirectionLeft ? "100%" : "-100%"}); }
    50% { transform: translateX(0); }
    100% { transform: translateX(0); }
  `;

  const handleToggle = () => {
    setIsGradientReversed((prev) => !prev);
    setIsDirectionLeft((prev) => !prev);
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignContent="center"
      textAlign="center"
      height="100vh"
      width="100%"
      position="relative"
      overflow="hidden"
      bg={
        isGradientReversed
          ? "linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(4,125,197,1) 22%, rgba(6,68,160,1) 43%, rgba(9,9,121,1) 74%, rgba(2,0,36,1) 100%)"
          : "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 26%, rgba(6,68,160,1) 57%, rgba(4,125,197,1) 78%, rgba(0,212,255,1) 100%)"
      }
      transition="background 1s ease-in-out"
    >
      <Box
        key={animationKey}
        position="absolute"
        top="0"
        left="0"
        height="100%"
        width="100%"
        bg="rgba(255, 255, 255, 0.1)"
        animation={`${waveAnimation} 1s ease-in-out`}
        zIndex={1}
      />

      <Box
        className="borderAll"
        position="absolute"
        top="10px"
        right="10px"
        zIndex="10"
      >
        <ToggleSwitch onChange={handleToggle} />
      </Box>

      <Box margin={"auto"} mt="10px" zIndex={2}>
        <ArrowScrollUp firstPageRef={firstPageRef} />
      </Box>

      <Box margin="0 0 30px 0" zIndex={2}>
        <AccordionCards />
      </Box>

      <Box margin={"auto"} mb="10px" zIndex={2}>
        <ArrowScrollDown thirdPageRef={thirdPageRef} />
      </Box>
    </Box>
  );
}
