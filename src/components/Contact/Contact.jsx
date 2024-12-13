import { useState } from "react";
import {
  Box,
  Button,
  Text,
  FormControl,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";

export default function ContactForm() {
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
      maxWidth="1280px"
      width="100%"
      mx="auto"
      bgColor="black"
      color="primary.500"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      boxShadow="lg"
      padding={{ base: "4", md: "8" }}
    >
      <Box
        className="borderAll"
        width={{ base: "100%", md: "60%" }}
        margin="auto"
        padding={{ base: "4", md: "6" }}
      >
        <Heading mb={8} fontSize={{ base: "lg", md: "2xl" }}>
          Contact Form
        </Heading>

        <form onSubmit={handleSubmit}>
          <FormControl mb={6} isRequired>
            <Input
              type="text"
              name="name"
              placeholder={placeholders.name}
              onFocus={() => handleFocus("name")}
              onBlur={() => handleBlur("name", "Enter your name")}
              fontSize={{ base: "sm", md: "md" }}
              value={formData.name}
              onChange={handleChange}
              bgColor="gray.800"
              color="white"
              sx={{
                "::placeholder": {
                  color: "primary.500",
                },
              }}
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
              onFocus={() => handleFocus("email")}
              onBlur={() => handleBlur("email", "Enter your email")}
              fontSize={{ base: "sm", md: "md" }}
              value={formData.email}
              onChange={handleChange}
              bgColor="gray.800"
              color="white"
              sx={{
                "::placeholder": {
                  color: "primary.500",
                },
              }}
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
              onFocus={() => handleFocus("message")}
              onBlur={() => handleBlur("message", "Enter your message")}
              fontSize={{ base: "sm", md: "md" }}
              value={formData.message}
              onChange={handleChange}
              bgColor="gray.800"
              color="white"
              sx={{
                "::placeholder": {
                  color: "primary.500",
                },
              }}
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
            bgColor="secondary.400"
            color="black"
            _hover={{ bgColor: "secondary.500" }}
            _active={{ bgColor: "secondary.600" }}
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
    </Box>
  );
}
