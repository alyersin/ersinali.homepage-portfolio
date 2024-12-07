"use client";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useState } from "react";

const cards = [
  {
    id: 1,
    title: "Card 1",
    content: "This is the first card.",
    image: "/assets/bg-1.jpg",
  },
  {
    id: 2,
    title: "Card 2",
    content: "This is the second card.",
    image: "/assets/bg-2.jpg",
  },
  {
    id: 3,
    title: "Card 3",
    content: "This is the third card.",
    image: "/assets/bg-3.jpg",
  },
  {
    id: 4,
    title: "Card 3",
    content: "This is the third card.",
    image: "/assets/bg-4.jpg",
  },
  {
    id: 5,
    title: "Card 3",
    content: "This is the third card.",
    image: "/assets/bg-5.jpg",
  },
];

const AccordionCards = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (id) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  return (
    <Flex
      direction="row"
      align="center"
      justify="center"
      wrap="nowrap"
      gap={4}
      overflow="hidden"
    >
      {cards.map((card) => (
        <Box
          key={card.id}
          onClick={() => toggleCard(card.id)}
          transition="all 0.3s ease"
          cursor="pointer"
          borderRadius="md"
          border="1px solid white"
          boxShadow="lg"
          overflow="hidden"
          backgroundColor="gray.800"
          color="white"
          width={activeCard === card.id ? "50%" : "10%"} // Expands the active card
          height="400px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          draggable={false}
        >
          <Image
            src={card.image}
            alt={card.title}
            width="100%"
            height="100%"
            objectFit="cover"
            draggable={false}
          />
          <Text fontSize="xl" fontWeight="bold" p={4}>
            {card.title}
          </Text>
          {activeCard === card.id && (
            <Text fontSize="md" p={4} textAlign="center">
              {card.content}
            </Text>
          )}
        </Box>
      ))}
    </Flex>
  );
};

export default AccordionCards;
