"use client";
import {
  Box,
  Flex,
  Text,
  Image,
  Tooltip,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useState, useEffect, useRef } from "react";
import { keyframes } from "@emotion/react";
import cards from "../../data/projects.json";
import { useCallback } from "react";

// SHAKE ANIMATION
const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5%); }
  50% { transform: translateX(5%); }
  75% { transform: translateX(-5%); }
  100% { transform: translateX(0); }
`;

// ARROW STYLES
const arrowStyles = {
  bg: "black",
  color: "white",
  boxSize: "10",
  border: "2px solid",
  borderColor: "white",
  borderRadius: "md",
  boxShadow: "lg",
  _hover: {
    bg: "gray.100",
    boxShadow: "xl",
  },
  _active: {
    bg: "blue.100",
    transform: "scale(0.95)",
    border: "2px solid teal",
  },
};

export default function AccordionCards() {
  const [activeCard, setActiveCard] = useState(null);
  const [flippedCards, setFlippedCards] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastTap, setLastTap] = useState(0);
  const [tapTimeout, setTapTimeout] = useState(null);
  const visibleCardsCount = useBreakpointValue({ base: 3, md: 7 });
  const isMobile = useBreakpointValue({ base: true, md: false });
  const containerRef = useRef(null);

  const tooltipText = isMobile
    ? "Double tap to flip"
    : "Click to interact / SPACE to flip";

  // RIGHT ARROW HANDLER
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  // LEFT ARROW HANDLER
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  // HANDLE CARD TAP
  const handleTap = (id, frontHref, backHref) => {
    const now = Date.now();

    if (now - lastTap < 300 && activeCard === id) {
      // DOUBLE TAP CODE
      clearTimeout(tapTimeout);
      setFlippedCards((prev) => ({
        ...prev,
        [id]: !prev[id],
      }));
    } else {
      // SINGLE TAP CODE
      setLastTap(now);
      setTapTimeout(
        setTimeout(() => {
          if (activeCard === id) {
            if (flippedCards[id] && backHref) {
              window.open(backHref, "_blank", "noopener,noreferrer");
            } else if (!flippedCards[id] && frontHref) {
              window.open(frontHref, "_blank", "noopener,noreferrer");
            }
          } else {
            setActiveCard(id);
            setFlippedCards((prev) => ({ ...prev, [id]: false }));
          }
        }, 300)
      );
    }
  };

  // HANDLE SPACE KEY TO FLIP (DESKTOP ONLY)
  const handleKeyDown = useCallback(
    (event) => {
      if (!isMobile) {
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
      }
    },
    [activeCard, isMobile]
  );

  // HANDLE CLICK OUTSIDE FOR MOBILE
  const handleClickOutside = useCallback(
    (event) => {
      if (
        isMobile &&
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setActiveCard(null);
        setFlippedCards({});
      }
    },
    [isMobile]
  );

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      if (!isMobile) {
        window.removeEventListener("keydown", handleKeyDown);
      } else {
        document.removeEventListener("click", handleClickOutside);
      }
    };
  }, [handleKeyDown, handleClickOutside, isMobile]);

  const visibleCards = cards
    .slice(currentIndex, currentIndex + visibleCardsCount)
    .concat(
      cards.slice(
        0,
        Math.max(0, currentIndex + visibleCardsCount - cards.length)
      )
    );

  return (
    <Flex
      ref={containerRef}
      position="relative"
      className="borderAll"
      direction="row"
      align="center"
      justify="center"
      wrap="nowrap"
      mt={{ base: 14, md: "10" }}
      mb={{ base: 24, md: "24" }}
      gap={{ base: 2, md: 2 }}
    >
      {/* LEFT ARROW */}
      <IconButton
        icon={<ArrowBackIcon />}
        position="absolute"
        left="2"
        top="50%"
        zIndex={10}
        onClick={handlePrev}
        aria-label="Previous Slide"
        {...arrowStyles}
      />
      {visibleCards.map((card) => (
        <Tooltip
          key={`${card.id}-${activeCard}`}
          label={tooltipText}
          fontWeight="bold"
          fontSize={{ base: 8, md: "xs" }}
          isOpen={activeCard === card.id}
          placement="top"
          hasArrow
          sx={{
            animation:
              activeCard === card.id
                ? `${shakeAnimation} 2s infinite`
                : undefined,
          }}
        >
          <Box
            onClick={() => handleTap(card.id, card.frontHref, card.backHref)}
            position="relative"
            width={
              activeCard === card.id
                ? { base: "80%", md: "50%" }
                : { base: "20%", md: "12%" }
            }
            height={{ base: "300px", md: "400px" }}
            cursor="pointer"
            sx={{
              transform: flippedCards[card.id]
                ? "rotateY(180deg)"
                : "rotateY(0)",
              transformStyle: "preserve-3d",
              transition: "transform 1s, width 0.3s",
            }}
          >
            {/* FRONT SIDE */}
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
                draggable={false}
              />
              <Text fontSize="xs" fontWeight="bold" p={2}>
                {card.title}
              </Text>
            </Box>

            {/* BACK SIDE */}
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
                draggable={false}
              />
              <Text fontSize="xs" fontWeight="bold" p={2}>
                Back of {card.title}
              </Text>
            </Box>
          </Box>
        </Tooltip>
      ))}
      {/* RIGHT ARROW */}
      <IconButton
        icon={<ArrowForwardIcon />}
        position="absolute"
        right="2"
        top="50%"
        zIndex={10}
        onClick={handleNext}
        aria-label="Next Slide"
        {...arrowStyles}
      />
    </Flex>
  );
}
