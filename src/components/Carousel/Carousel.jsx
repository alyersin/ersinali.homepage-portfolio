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
    <Box overflow="hidden" whiteSpace="nowrap" position="relative" width="100%">
      <Box
        display="inline-flex"
        animation={`${scroll} 30s linear infinite`}
        style={{ width: "200%" }}
        gap={{ base: 2, md: 4 }}
      >
        {doubledItems.map((item, index) => (
          <HStack
            key={index}
            spacing={0}
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={item.src}
              alt={item.alt}
              boxSize={{ base: "120px", md: "200px", lg: "240px" }}
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
