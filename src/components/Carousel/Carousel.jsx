"use client";
import { Box, HStack, Image } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }  // Scroll halfway to achieve seamless loop
`;

export default function Carousel({ items = [] }) {
  const doubledItems = items.concat(items);

  return (
    <Box
      className="borderAll"
      overflow="hidden"
      whiteSpace="nowrap"
      position="relative"
    >
      <Box
        className="borderAll"
        display="inline-flex"
        animation={`${scroll} 30s linear infinite`}
        style={{ width: "200%" }}
        gap={2}
        maxWidth="1280px"
      >
        {doubledItems.map((item, index) => (
          <HStack className="borderAll" key={index} spacing={2}>
            <Image
              src={item.src}
              alt={item.alt}
              width={{ base: "24", md: "32" }}
              height={{ base: "16", md: "20" }}
              objectFit="contain"
              borderRadius="md"
              draggable="false"
            />
          </HStack>
        ))}
      </Box>
      //{" "}
    </Box>
  );
}
