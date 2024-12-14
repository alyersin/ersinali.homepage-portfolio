import { Box, Icon } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { keyframes } from "@emotion/react";
import React from "react";

const shakeArrowUp = keyframes`
  0% { transform: translateY(0); }
  25% { transform: translateY(5px); }
  50% { transform: translateY(-5px); }
  75% { transform: translateY(5px); }
  100% { transform: translateY(0); }
`;

export default function ArrowScrollUp({ firstPageRef }) {
  const handleScrollUp = () => {
    firstPageRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      className="borderAll"
      cursor="pointer"
      display="flex"
      width="fit-content"
      padding={2}
      flexDirection="column"
      alignItems="center"
      onClick={handleScrollUp}
    >
      <Icon
        as={ChevronUpIcon}
        boxSize={{ base: 8, md: 10 }}
        sx={{
          animation: `${shakeArrowUp} 2s infinite`,
          animationTimingFunction: "ease-in-out",
        }}
      />
    </Box>
  );
}
