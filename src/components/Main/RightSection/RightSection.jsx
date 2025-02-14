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
      // bg={
      //   isDark
      //     ? "radial-gradient(circle, rgba(38,102,100,1) 0%, #1a202c 100%)"
      //     : "#2a9d8f"
      // }
      bg="#1a202c"
      position="relative"
    >
      <Box>
        <MiniHeader toggleTheme={toggleTheme} />
      </Box>

      <Box
        className="borderAll"
        display="flex"
        flexDirection="column"
        // justifyContent="center"
        // alignItems="center"
        textAlign="left"
        gap={{ base: "4", md: "8" }}
        fontFamily="Mosk"
        fontWeight="900"
        fontSize={{ base: "lg", md: "xl" }}
        width="70%"
        height="auto"
        margin="auto"
        padding={{ base: "12px 8px", sm: "16px 12px", md: "4px 0 80px 40px" }}
      >
        {/* <Heading as="h1" fontSize={{ base: "2xl", md: "7xl" }} mb={0}>
          Hello,
        </Heading> */}
        {/* <Text fontSize={{ base: "lg", md: "2.5rem" }}>
          I'm{" "}
          <Text as="span" color={isDark ? "#f5f5f5" : "#404040"}>
            ERSIN
          </Text>
          , a
        </Text>
        <Text fontSize={{ base: "lg", md: "2.5rem" }}>
          Freelance{" "}
          <Text as="span" color="#16F5B5">
            Web Developer
          </Text>
          .
        </Text> */}
        <Box className="borderAll">
          <Heading
            fontSize={{ base: "lg", md: "4.5rem" }}
            sx={{
              background:
                "linear-gradient(-90deg, rgba(131,58,180,1) 40%, rgba(196,65,176,1) 70%, rgba(252,69,73,1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            FRONTEND
          </Heading>
          <Heading
            fontSize={{ base: "lg", md: "4.5rem" }}
            sx={{
              background:
                "linear-gradient(90deg, rgba(131,58,180,1) 40%, rgba(196,65,176,1) 70%, rgba(252,69,73,1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            DEVELOPER
          </Heading>
        </Box>

        <Box className="borderAllRed" fontWeight="500">
          <Text>
            I'm Ersin -
            <Text as={"span"} color="#16F5B5">
              web-developer{" "}
            </Text>
            with a passion for creating engaging and responsive websites.
          </Text>
        </Box>

        <Flex
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: 6, md: 4 }}
          mt={0}
          flexWrap="wrap"
          // justifyContent="center"
        >
          <Button
            fontSize="lg"
            fontWeight="bold"
            px="8"
            py="6"
            borderRadius="full"
            border="2px solid transparent"
            bg="transparent"
            color="white"
            _hover={{ bg: "rgba(255,255,255,0.1)" }}
            position="relative"
            onClick={() => {
              secondPageRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
            _before={{
              content: '""',
              position: "absolute",
              inset: 0,
              borderRadius: "full",
              padding: "2px",
              background: "linear-gradient(90deg, #00C6FF, #FF00FF)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              maskComposite: "exclude",
            }}
          >
            VIEW MY WORK
          </Button>
          {/* <Button
            as={Link}
            href="#contact"
            bg="black"
            color="white"
            border="1px solid rgba(196,65,176,1)"
            px={6}
            py={4}
            borderRadius="full"
            fontSize={{ base: "sm", md: "14" }}
            _hover={{ bg: "pink.600", textDecoration: "none" }}
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
            _hover={{ bg: "teal.600", textDecoration: "none" }}
          >
            <Icon as={FaDownload} mr={2} />
            GET RESUME
          </Button> */}
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
