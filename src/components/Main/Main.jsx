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
      className="borderAll"
      bg="gray.900"
      maxWidth="1280px"
      color="white"
      textAlign="center"
      mx="auto"
    >
      {/* FIRST PAGE */}
      <Box
        ref={firstPageRef}
        className="borderAll"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        gap="6px"
        fontSize="2.5rem"
        width="100%"
        height="100vh"
        px={{ base: 4, md: 8 }}
        py={12}
      >
        <Heading as="h1" size="2xl" mb={4}>
          Hello,
        </Heading>
        <Text fontSize={{ base: "2xl", md: "3xl" }} mb={2}>
          This is{" "}
          <Text as="span" color="#E9008A" fontWeight="bold">
            ERSIN
          </Text>
          , I&apos;m a
        </Text>
        <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          color="teal.400"
        >
          Freelance{" "}
          <Text as="span" color="#16F5B5">
            Web Developer
          </Text>
          .
        </Text>
        {/* SOCIAL ICONS */}
        <HStack spacing={24} mt={6} margin="34px 0 34px 0">
          <Link href="https://github.com" isExternal>
            <Icon
              as={FaGithub}
              boxSize={26}
              color="rgba(196,65,176,1)"
              _hover={{ color: "teal.400" }}
            />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <Icon
              as={FaLinkedin}
              boxSize={26}
              color="rgba(196,65,176,1)"
              _hover={{ color: "teal.400" }}
            />
          </Link>
          <Link href="https://facebook.com" isExternal>
            <Icon
              as={FaFacebook}
              boxSize={26}
              color="rgba(196,65,176,1)"
              _hover={{ color: "pink.400" }}
            />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <Icon
              as={FaTwitter}
              boxSize={26}
              color="rgba(196,65,176,1)"
              _hover={{ color: "pink.400" }}
            />
          </Link>
        </HStack>
        {/* BUTTONS */}
        <Flex gap={8} mt={8}>
          <Link
            href="#contact"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="8px"
            bg="black"
            color="white"
            border="1px solid rgba(196,65,176,1)"
            borderRadius={20}
            _hover={{ bg: "pink.400", borderColor: "pink.400" }}
            px={20}
            py={10}
            fontSize="0.8rem"
          >
            <Icon as={FaEnvelope} mr={2} />
            CONTACT ME
          </Link>
          <Link
            href="/resume.pdf"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="8px"
            bg="linear-gradient(90deg, rgba(131,58,180,1) 40%, rgba(196,65,176,1) 70%, rgba(252,69,73,1) 100%)"
            color="white"
            border="none"
            borderRadius={20}
            _hover={{ bg: "pink.500" }}
            px={20}
            py={10}
            fontSize="0.8rem"
            download="Ersin_Resume.pdf"
          >
            <Icon as={FaDownload} mr={2} />
            GET RESUME
          </Link>
        </Flex>

        {/* SCROLL DOWN */}
        <Box
          mt={12}
          cursor="pointer"
          display="flex"
          flexDirection="column"
          alignItems="center"
          margin="120px 0 140px 0"
          onClick={handleScrollDown}
        >
          <Text fontSize="1.1rem" mb={2}>
            Learn more
          </Text>
          <Icon
            as={ChevronDownIcon}
            w={34}
            h={34}
            color="white"
            sx={{
              animation: `${shakeArrowDown} 2s infinite`,
            }}
          />
        </Box>
      </Box>
      {/* SECOND PAGE */}
      <Box
        ref={secondPageRef}
        className="borderAll"
        display="flex"
        flexDirection="column"
        gap={24}
        w="100%"
        py={12}
        px={{ base: 4, md: 8 }}
        bg="gray.800"
        minH="100vh"
      >
        <Heading id="projects" color="#149AD7" mb={6} mt={22}>
          My Projects
        </Heading>
        <Box width="100%" py={6}>
          <AccordionCards />
        </Box>

        <Box id="skills" margin="80px 0 80px 0">
          <Carousel items={images} />
        </Box>

        {/* SCROLL UP */}
        <Box
          mt={12}
          cursor="pointer"
          display="flex"
          flexDirection="column"
          alignItems="center"
          onClick={handleScrollUp}
        >
          <Text fontSize="1.1rem" mb={2}>
            Back to Top
          </Text>
          <Icon
            as={ChevronUpIcon}
            transform="rotate(180deg)"
            w={34}
            h={34}
            color="white"
            sx={{
              animation: `${shakeArrowUp} 2s infinite`,
            }}
          />
        </Box>

        <Box id="contact" py={12} margin="100px 0 0 0">
          <Contact />
        </Box>
      </Box>
    </Box>
  );
}
