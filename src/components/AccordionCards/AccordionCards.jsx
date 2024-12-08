"use client";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const cards = [
  {
    id: 1,
    title: "CITY-CHASE",
    image: "/assets/projects/city-chase.avif",
    href: "https://city-chase.vercel.app/",
  },
  {
    id: 2,
    title: "URBAN-EDGE",
    image: "/assets/projects/urban-edge.avif",
    href: "https://urban-edge-rho.vercel.app/",
  },
  {
    id: 3,
    title: "E-QUIZZ",
    image: "/assets/projects/e-quizz.avif",
    href: "https://interactive-quiz-app-rust.vercel.app/",
  },
  {
    id: 4,
    title: "Card 4",
    image: "/assets/bg-4.jpg",
  },
  {
    id: 5,
    title: "Card 5",
    image: "/assets/bg-5.jpg",
  },
];

const AccordionCards = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (id, href) => {
    if (activeCard === id) {
      if (href) {
        window.open(href, "_blank", "noopener,noreferrer");
      }
    } else {
      setActiveCard(id);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setActiveCard(null);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Flex
      className="borderAll"
      direction="row"
      align="center"
      justify="center"
      wrap="nowrap"
      gap={10}
      overflow="hidden"
    >
      {cards.map((card) => (
        <Box
          className="borderAll"
          key={card.id}
          onClick={() => handleCardClick(card.id, card.href)}
          transition="all 0.3s ease"
          cursor="pointer"
          borderRadius="md"
          boxShadow="lg"
          overflow="hidden"
          backgroundColor="gray.800"
          color="white"
          width={activeCard === card.id ? "50%" : "10%"}
          height="400px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          draggable={false}
        >
          <Box
            width="100%"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Image
              src={card.image}
              alt={card.title}
              width="100%"
              height="100%"
              objectFit="cover"
              draggable={false}
            />
            <Text fontSize="10px" fontWeight="bold" p={2}>
              {card.title}
            </Text>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default AccordionCards;
