import { useState } from "react";
import {
  Box,
  Button,
  Text,
  FormControl,
  Heading,
  Input,
  HStack,
  Link,
  Icon,
  Textarea,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";
import Carousel from "../../Carousel/Carousel";
import ArrowScrollUp from "@/components/ArrowScroll/ArrowScrollUp";
import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";

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
  { src: "/assets/SVG_Logo.svg", alt: "svg" },
];

export default function ContactForm({ secondPageRef }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [placeholders, setPlaceholders] = useState({
    name: "Enter your name",
    email: "Enter your email",
    message: "Enter your message",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFeedback("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const error = await response.json();
        setFeedback(`Failed to send message: ${error.error}`);
      }
    } catch (error) {
      setFeedback("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleFocus = (field) => {
    setPlaceholders((prev) => ({ ...prev, [field]: "" }));
  };

  const handleBlur = (field, defaultValue) => {
    if (formData[field].trim() === "") {
      setPlaceholders((prev) => ({ ...prev, [field]: defaultValue }));
    }
  };

  return (
    <Box
      className="borderAll"
      height="100vh"
      maxWidth="1280px"
      width="100%"
      mx="auto"
      bgImage="/assets/blue_technical_background_1.jpg"
      bgSize="cover"
      // bgColor={isDark ? "#11182B" : "#014f86"}
      // color={isDark ? "white" : "primary.500"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      boxShadow="lg"
      position="relative"
    >
      {/* <Box className="borderAll" position="absolute" top="10px" right="10px">
        <ToggleSwitch onChange={handleToggle} />
      </Box> */}

      <Box margin="auto" mt="10px">
        <ArrowScrollUp firstPageRef={secondPageRef} />
      </Box>

      {/* CONTACT FORM */}
      <Box
        className="borderAll"
        width={{ base: "100%", md: "60%" }}
        margin="auto"
        padding={{ base: "12", md: "6" }}
      >
        <Heading mb={6} fontSize={{ base: "lg", md: "2xl" }} color="white">
          Contact Form
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl mb={6} isRequired>
            <Input
              type="text"
              name="name"
              placeholder={placeholders.name}
              aria-label="Enter your name"
              onFocus={() => handleFocus("name")}
              onBlur={() => handleBlur("name", "Enter your name")}
              fontSize={{ base: "sm", md: "md" }}
              value={formData.name}
              onChange={handleChange}
              bgColor={isDark ? "gray.700" : "gray.800"}
              color="white"
              border="1px solid"
              borderColor="primary.500"
              borderRadius="md"
              padding={4}
              width="100%"
            />
          </FormControl>

          <FormControl mb={6} isRequired>
            <Input
              type="email"
              name="email"
              placeholder={placeholders.email}
              aria-label="Enter your email"
              onFocus={() => handleFocus("email")}
              onBlur={() => handleBlur("email", "Enter your email")}
              fontSize={{ base: "sm", md: "md" }}
              value={formData.email}
              onChange={handleChange}
              bgColor={isDark ? "gray.700" : "gray.800"}
              color="white"
              border="1px solid"
              borderColor="primary.500"
              borderRadius="md"
              padding={4}
              width="100%"
            />
          </FormControl>

          <FormControl mb={6} isRequired>
            <Textarea
              name="message"
              placeholder={placeholders.message}
              aria-label="Enter your message"
              onFocus={() => handleFocus("message")}
              onBlur={() => handleBlur("message", "Enter your message")}
              fontSize={{ base: "sm", md: "md" }}
              value={formData.message}
              onChange={handleChange}
              bgColor={isDark ? "gray.700" : "gray.800"}
              color="white"
              border="1px solid"
              borderColor="primary.500"
              borderRadius="md"
              padding={4}
              width="100%"
              height={28}
            />
          </FormControl>

          <Button
            type="submit"
            isLoading={loading}
            bgColor="#ffbd39"
            color="black"
            _hover={{ bgColor: "#ffdd5e" }}
            _active={{ bgColor: "#ffbd39" }}
            padding={6}
            width="100%"
            fontSize={{ base: "sm", md: "md" }}
          >
            SEND MESSAGE
          </Button>

          {feedback && (
            <Text
              mt={4}
              textAlign="center"
              color={feedback.includes("success") ? "green.400" : "red.400"}
              fontSize={{ base: "sm", md: "md" }}
            >
              {feedback}
            </Text>
          )}
        </form>
      </Box>

      <HStack
        className="borderAllRed"
        spacing={{ base: 8, md: 6 }}
        mt={0}
        mb={14}
      >
        <Link href="https://github.com" isExternal>
          <Icon as={FaGithub} boxSize={{ base: 6, md: 7 }} color="black" />
        </Link>
        <Link href="https://linkedin.com" isExternal>
          <Icon as={FaLinkedin} boxSize={{ base: 6, md: 7 }} color="#0077B5" />
        </Link>
        <Link href="https://facebook.com" isExternal>
          <Icon as={FaFacebook} boxSize={{ base: 6, md: 7 }} color="#1877F2" />
        </Link>
      </HStack>

      {/* SKILLS */}
      <Box id="skills" mb={12}>
        <Box>
          <Carousel items={images} />
        </Box>
      </Box>
    </Box>
  );
}
