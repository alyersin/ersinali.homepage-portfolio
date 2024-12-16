import {
  Box,
  Heading,
  Text,
  Button,
  Link,
  Icon,
  Flex,
  HStack,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";
import MiniHeader from "./MiniHeader/MiniHeader";
import ArrowScrollDown from "@/components/ArrowScroll/ArrowScrollDown";

export default function RightSection({
  isDark,
  toggleTheme,
  firstPageRef,
  secondPageRef,
}) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      className="borderAll"
      height="100vh"
      width="65%"
      bg={
        isDark
          ? "radial-gradient(circle, rgba(67,163,164,1) 0%, rgba(34,31,24,1) 100%)"
          : "#2a9d8f"
      }
      position="relative"
    >
      <Box>
        <MiniHeader toggleTheme={toggleTheme} />
      </Box>

      <Box
        className="borderAll"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        gap={{ base: "4", md: "0" }}
        fontFamily="Mosk"
        fontWeight="900"
        fontSize={{ base: "lg", md: "xl" }}
        width="100%"
        height="auto"
        margin="auto"
        padding="4px 0 80px 40px"
      >
        <Heading as="h1" fontSize={{ base: "2xl", md: "7xl" }} mb={0}>
          Hello,
        </Heading>
        <Text fontSize={{ base: "lg", md: "2.5rem" }}>
          This is{" "}
          <Text as="span" color={isDark ? "#f5f5f5" : "#404040"}>
            ERSIN
          </Text>
          , I&apos;m a
        </Text>
        <Text fontSize={{ base: "lg", md: "2.5rem" }}>
          Freelance{" "}
          <Text as="span" color="#16F5B5">
            Web Developer
          </Text>
          .
        </Text>

        <HStack spacing={{ base: 8, md: 6 }} mt={14} mb={14}>
          <Link href="https://github.com" isExternal>
            <Icon as={FaGithub} boxSize={{ base: 6, md: 7 }} color="black" />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <Icon
              as={FaLinkedin}
              boxSize={{ base: 6, md: 7 }}
              color="#0077B5"
            />
          </Link>
          <Link href="https://facebook.com" isExternal>
            <Icon
              as={FaFacebook}
              boxSize={{ base: 6, md: 7 }}
              color="#1877F2"
            />
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
        bottom="10px"
        left="23%"
        transform="translateX(-50%)"
      >
        <ArrowScrollDown secondPageRef={secondPageRef} />
      </Box>
    </Box>
  );
}
