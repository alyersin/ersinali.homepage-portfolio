"use client";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const cards = [
  {
    id: 1,
    title: "CITY-CHASE",
    frontImage: "/assets/projects/city-chase.avif",
    backImage: "/assets/bg-3.jpg",
    frontHref: "https://city-chase.vercel.app/",
    backHref: "https://city-chase-info.com/",
  },
  {
    id: 2,
    title: "URBAN-EDGE",
    frontImage: "/assets/projects/urban-edge.avif",
    backImage: "/assets/bg-3.jpg",
    frontHref: "https://urban-edge-rho.vercel.app/",
    backHref: "https://urban-edge-info.com/",
  },
  {
    id: 3,
    title: "E-QUIZZ",
    frontImage: "/assets/projects/e-quizz.avif",
    backImage: "/assets/bg-3.jpg",
    frontHref: "https://interactive-quiz-app-rust.vercel.app/",
    backHref: "https://e-quizz-info.com/",
  },
  {
    id: 4,
    title: "E-QUIZZ",
    frontImage: "/assets/bg-4.jpg",
    backImage: "/assets/bg-3.jpg",
    frontHref: "https://interactive-quiz-app-rust.vercel.app/",
    backHref: "https://e-quizz-info.com/",
  },
  {
    id: 5,
    title: "E-QUIZZ",
    frontImage: "/assets/bg-5.jpg",
    backImage: "/assets/bg-3.jpg",
    frontHref: "https://interactive-quiz-app-rust.vercel.app/",
    backHref: "https://e-quizz-info.com/",
  },
];

export default function AccordionCards() {
  const [activeCard, setActiveCard] = useState(null);
  const [flippedCards, setFlippedCards] = useState({});

  const handleCardClick = (id) => {
    if (activeCard === id) {
      return;
    }
    setActiveCard(id);
    setFlippedCards((prev) => ({ ...prev, [id]: false }));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setActiveCard(null);
      setFlippedCards({});
    } else if (event.key === " " && activeCard !== null) {
      event.preventDefault();
      setFlippedCards((prev) => ({
        ...prev,
        [activeCard]: !prev[activeCard],
      }));
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCard]);

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
          key={card.id}
          onClick={() => handleCardClick(card.id)}
          position="relative"
          width={activeCard === card.id ? "50%" : "10%"}
          height="400px"
          cursor="pointer"
          sx={{
            transform: flippedCards[card.id] ? "rotateY(180deg)" : "rotateY(0)",
            transformStyle: "preserve-3d",
            transition: "transform 1s, width 0.3s",
          }}
        >
          {/* Front Side */}
          <Box
            position="absolute"
            width="100%"
            height="100%"
            style={{
              backfaceVisibility: "hidden",
            }}
          >
            <Image
              src={card.frontImage}
              alt={card.title}
              width="100%"
              height="100%"
              objectFit="cover"
            />
            <Text fontSize="10px" fontWeight="bold" p={2}>
              {card.title}
            </Text>
          </Box>

          {/* Back Side */}
          <Box
            position="absolute"
            width="100%"
            height="100%"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <Image
              src={card.backImage}
              alt={`${card.title} - Back`}
              width="100%"
              height="100%"
              objectFit="cover"
            />
            <Text fontSize="10px" fontWeight="bold" p={2}>
              Back of {card.title}
            </Text>
            {card.backHref && (
              <a
                href={card.backHref}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "cyan", textDecoration: "underline" }}
              >
                Visit Back Link
              </a>
            )}
          </Box>
        </Box>
      ))}
    </Flex>
  );
}
