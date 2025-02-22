import { Box, Icon } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { keyframes } from "@emotion/react";
import React from "react";

const shakeArrowDown = keyframes`
  0% { transform: translateY(0); }
  25% { transform: translateY(-5px); }
  50% { transform: translateY(5px); }
  75% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

export default function ArrowScrollDown({ secondPageRef, thirdPageRef }) {
  const handleScrollDown = () => {
    if (thirdPageRef) {
      thirdPageRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      secondPageRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      className="borderAll"
      cursor="pointer"
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={2}
      onClick={handleScrollDown}
      opacity={0.5}
    >
      <Icon
        as={ChevronDownIcon}
        boxSize={{ base: 6, md: 6 }}
        // sx={{
        //   animation: `${shakeArrowDown} 2s infinite`,
        //   animationTimingFunction: "ease-in-out",
        // }}
      />
    </Box>
  );
}
