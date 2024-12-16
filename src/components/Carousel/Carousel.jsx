"use client";
import { Box, HStack, Image } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } 
`;

export default function Carousel({ items = [] }) {
  const doubledItems = items.concat(items);

  return (
    <Box
      className="borderAll"
      overflow="hidden"
      whiteSpace="nowrap"
      position="relative"
      width="100%"
    >
      <Box
        className="borderAllRed"
        display="inline-flex"
        animation={`${scroll} 30s linear infinite`}
        style={{ width: "200%" }}
        gap={{ base: 1, md: 4 }}
      >
        {doubledItems.map((item, index) => (
          <HStack
            className="borderAll"
            key={index}
            spacing={0}
            justifyContent="center"
            alignItems="center"
            margin="auto"
          >
            <Image
              className="borderAllBlue"
              src={item.src}
              alt={item.alt}
              width={{ base: "160px", sm: "180px", md: "220px", lg: "260px" }}
              height="auto"
              objectFit="contain"
              borderRadius="md"
              draggable="false"
            />
          </HStack>
        ))}
      </Box>
    </Box>
  );
}
