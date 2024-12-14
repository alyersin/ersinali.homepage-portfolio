import {
  Box,
  Heading,
  Text,
  Button,
  Link,
  Icon,
  Flex,
  HStack,
  useColorMode,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";
import React from "react";
import MiniHeader from "./MiniHeader/MiniHeader";
import ArrowScrollDown from "@/components/ArrowScroll/ArrowScrollDown";

export default function RightSection({ firstPageRef, secondPageRef }) {
  const { colorMode } = useColorMode();

  return (
    <Box
      className="borderAll"
      height="100vh"
      width="65%"
      bg={colorMode === "light" ? "#2a9d8f" : "#1a202c"} // Dynamic background color
      position="relative"
    >
      <MiniHeader />
      {/* INFORMATION */}
      <Box
        className="borderAll"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        gap={{ base: "4", md: "0" }}
        fontSize={{ base: "lg", md: "xl" }}
        width="100%"
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
            href="/CV/ERSIN_ALI_CV.pdf"
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
      </Box>

      <Box
        position="absolute"
        bottom="40px"
        left="23%"
        transform="translateX(-50%)"
      >
        <ArrowScrollDown secondPageRef={secondPageRef} />
      </Box>
    </Box>
  );
}
