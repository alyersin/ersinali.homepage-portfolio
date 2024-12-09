import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  Link,
  Icon,
  Flex,
  Button,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import AccordionCards from "../AccordionCards/AccordionCards";
import Carousel from "../Carousel/Carousel";
import Contact from "../Contact/Contact";

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

export default function Main() {
  return (
    <Box
      className="borderAll"
      bg="gray.900"
      maxWidth="1280px"
      minH="100vh"
      color="white"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      mx="auto"
      my="auto"
      px={{ base: 4, md: 8 }}
      gap={{ base: 8, md: 12 }}
    >
      <Box
        bg="linear-gradient(180deg, #1a202c, #1e1e2f)"
        color="white"
        py={10}
        px={{ base: 4, md: 8 }}
      >
        {/* Text Content */}
        <Heading as="h1" size="2xl" mb={4}>
          Hello,
        </Heading>
        <Text fontSize={{ base: "2xl", md: "3xl" }} mb={2}>
          This is{" "}
          <Text as="span" color="pink.400" fontWeight="bold">
            Ersin
          </Text>
          , I'm a
        </Text>
        <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          color="teal.400"
        >
          Freelance Web Developer.
        </Text>

        {/* Social Icons */}
        <HStack spacing={4} mt={6}>
          <Link href="https://github.com" isExternal>
            <Icon
              as={FaGithub}
              boxSize={6}
              color="white"
              _hover={{ color: "teal.400" }}
            />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <Icon
              as={FaLinkedin}
              boxSize={6}
              color="white"
              _hover={{ color: "teal.400" }}
            />
          </Link>
          <Link href="https://facebook.com" isExternal>
            <Icon
              as={FaFacebook}
              boxSize={6}
              color="white"
              _hover={{ color: "pink.400" }}
            />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <Icon
              as={FaTwitter}
              boxSize={6}
              color="white"
              _hover={{ color: "pink.400" }}
            />
          </Link>
        </HStack>

        {/* Buttons */}
        <Flex gap={4} mt={8}>
          <Button
            bg="black"
            color="white"
            border="2px solid white"
            _hover={{ bg: "pink.400", borderColor: "pink.400" }}
            px={8}
            py={6}
            fontSize="lg"
            leftIcon={<Icon as={FaLinkedin} />}
          >
            Contact Me
          </Button>
          <Button
            bg="pink.400"
            color="white"
            _hover={{ bg: "pink.500" }}
            px={8}
            py={6}
            fontSize="lg"
            leftIcon={<Icon as={FaGithub} />}
          >
            Get Resume
          </Button>
        </Flex>
      </Box>

      <Heading id="projects" color="#149AD7" padding="100px 0 20px 0">
        My Projects
      </Heading>

      <Box width="100%" padding="40px 0 100px 0">
        <AccordionCards />
      </Box>

      <Heading id="skills" color="#149AD7">
        My Skills
      </Heading>

      <Box width="100%" padding="40px 0 100px 0">
        <Carousel items={images} />
      </Box>

      <Box id="contact" padding="0 0 10px 0">
        <Contact />
      </Box>
    </Box>
  );
}
