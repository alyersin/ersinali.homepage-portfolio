"use client";
import {
  Box,
  Heading,
  Text,
  HStack,
  Link,
  Icon,
  Flex,
  Button,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";
import AccordionCards from "../AccordionCards/AccordionCards";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import Carousel from "../Carousel/Carousel";
import Contact from "../Contact/Contact";
import { keyframes } from "@emotion/react";
import "/src/app/globals.css";

import { useRef } from "react";

const images = [
  { src: "/assets/html.png", alt: "html" },
  { src: "/assets/css.png", alt: "css" },
  { src: "/assets/js.png", alt: "js" },
  { src: "/assets/reactjs.png", alt: "reactjs" },
  { src: "/assets/nextjs.png", alt: "nextjs" },
  { src: "/assets/chakraUI.png", alt: "chakra-ui" },
  { src: "/assets/nodejs.png", alt: "nodejs" },
  { src: "/assets/github.png", alt: "github" },
  { src: "/assets/git.png", alt: "git" },
  { src: "/assets/mysql.png", alt: "mysql" },
  { src: "/assets/ai.png", alt: "ai" },
  { src: "/assets/csharp.png", alt: "csharp" },
];

const shakeArrowDown = keyframes`
  0% { transform: translateY(0); }
  25% { transform: translateY(-5px); }
  50% { transform: translateY(5px); }
  75% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

const shakeArrowUp = keyframes`
  0% { transform: translateY(0); }
  25% { transform: translateY(5px); }
  50% { transform: translateY(-5px); }
  75% { transform: translateY(5px); }
  100% { transform: translateY(0); }
`;

export default function Main() {
  const secondPageRef = useRef(null);
  const firstPageRef = useRef(null);

  const handleScrollDown = () => {
    secondPageRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollUp = () => {
    firstPageRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      className="borderAllBlue"
      maxWidth="1280px"
      color="white"
      textAlign="center"
      mx="auto"
    >
      {/* FIRST PAGE */}
      <Box
        className="borderAll"
        ref={firstPageRef}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        gap={{ base: "4", md: "0" }}
        fontSize={{ base: "lg", md: "xl" }}
        width="100%"
        height="100vh"
        px={{ base: 4, md: 8 }}
        py={12}
      >
        <Heading as="h1" fontSize={{ base: "2xl", md: "7xl" }} mb={0}>
          Hello,
        </Heading>
        <Text fontSize={{ base: "lg", md: "2.5rem" }}>
          This is{" "}
          <Text as="span" color="#E9008A" fontWeight="bold">
            ERSIN
          </Text>
          , I&apos;m a
        </Text>
        <Text fontSize={{ base: "lg", md: "2.5rem" }} fontWeight="bold">
          Freelance{" "}
          <Text as="span" color="#16F5B5">
            Web Developer
          </Text>
          .
        </Text>

        {/* SOCIAL ICONS */}
        <HStack
          spacing={{ base: 8, md: 6 }}
          mt={14}
          mb={14}
          color="rgba(196,65,176,1)"
        >
          <Link href="https://github.com" isExternal>
            <Icon as={FaGithub} boxSize={{ base: 6, md: 7 }} />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <Icon as={FaLinkedin} boxSize={{ base: 6, md: 7 }} />
          </Link>
          <Link href="https://facebook.com" isExternal>
            <Icon as={FaFacebook} boxSize={{ base: 6, md: 7 }} />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <Icon as={FaTwitter} boxSize={{ base: 6, md: 7 }} />
          </Link>
        </HStack>

        {/* BUTTONS */}
        <Flex
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: 6, md: 4 }}
          mt={0}
          flexWrap="wrap"
          justifyContent="center"
        >
          <Button
            as={Link}
            href="#contact"
            bg="black"
            color="white"
            border="1px solid rgba(196,65,176,1)"
            px={6}
            py={4}
            borderRadius="full"
            fontSize={{ base: "sm", md: "14" }}
            _hover={{ bg: "pink.600" }}
          >
            <Icon as={FaEnvelope} mr={2} />
            CONTACT ME
          </Button>
          <Button
            as={Link}
            href="/resume.pdf"
            bg="linear-gradient(90deg, rgba(131,58,180,1) 40%, rgba(196,65,176,1) 70%, rgba(252,69,73,1) 100%)"
            color="white"
            px={6}
            py={4}
            borderRadius="full"
            fontSize={{ base: "sm", md: "14" }}
            _hover={{ bg: "teal.600" }}
          >
            <Icon as={FaDownload} mr={2} />
            GET RESUME
          </Button>
        </Flex>

        {/* SCROLL DOWN */}
        <Box
          className="borderAll"
          mt={32}
          cursor="pointer"
          display="flex"
          flexDirection="column"
          alignItems="center"
          onClick={handleScrollDown}
        >
          <Text fontSize="lg" mb={2}>
            Learn more
          </Text>
          <Icon
            as={ChevronDownIcon}
            boxSize={{ base: 8, md: 10 }}
            sx={{
              animation: `${shakeArrowDown} 2s infinite`,
            }}
          />
        </Box>
      </Box>

      {/* SECOND PAGE */}
      <Box
        ref={secondPageRef}
        py={12}
        px={{ base: 4, md: 8 }}
        minH="100vh"
        textAlign="center"
      >
        <Heading
          id="projects"
          fontSize={{ base: "2xl", md: "3xl" }}
          color="#149AD7"
          mb={6}
        >
          My Projects
        </Heading>

        <Box>
          <AccordionCards />
        </Box>

        <Box id="skills" mt={24}>
          <Carousel items={images} />
        </Box>

        {/* SCROLL UP */}
        <Box mt={12} cursor="pointer" onClick={handleScrollUp}>
          <Text fontSize="lg" mb={2}>
            Back to Top
          </Text>
          <Icon
            as={ChevronUpIcon}
            boxSize={{ base: 8, md: 10 }}
            sx={{
              animation: `${shakeArrowUp} 2s infinite`,
            }}
          />
        </Box>
      </Box>

      {/* CONTACT SECTION */}
      <Box id="contact" py={12}>
        <Contact />
      </Box>
    </Box>
  );
}
