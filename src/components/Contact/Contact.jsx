import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Image,
  Input,
  Textarea,
} from "@chakra-ui/react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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

  return (
    <Box
      className="borderAll"
      maxWidth="1280px"
      width="100%"
      mx="auto"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      gap={6}
      p={8}
      borderRadius="lg"
      boxShadow="lg"
    >
      <Image
        src="/assets/bg-1.jpg"
        alt="Logo"
        draggable={false}
        width="60%"
        height={240}
        mx="auto"
        mb={4}
      />

      <Box
        className="borderAll"
        width={{ base: "100%", md: "60%" }}
        margin="auto"
        height="240px"
      >
        <form onSubmit={handleSubmit}>
          <FormControl mb={4} isRequired>
            <Input
              type="text"
              name="name"
              placeholder=" Name"
              value={formData.name}
              onChange={handleChange}
              backgroundColor="black"
              color="white"
              bg="gray.700"
              border="none"
            />
          </FormControl>
          <FormControl mb={4} isRequired>
            <Input
              type="email"
              name="email"
              placeholder=" Email"
              value={formData.email}
              onChange={handleChange}
              backgroundColor="black"
              color="white"
              bg="gray.700"
              border="none"
            />
          </FormControl>
          <FormControl mb={4} isRequired>
            <Textarea
              name="message"
              placeholder=" Message"
              value={formData.message}
              onChange={handleChange}
              backgroundColor="black"
              color="white"
              bg="gray.700"
              border="none"
            />
          </FormControl>
          <Button
            type="submit"
            colorScheme="teal"
            isLoading={loading}
            width="full"
          >
            Send Message
          </Button>
          {feedback && (
            <Box
              mt={4}
              textAlign="center"
              color={feedback.includes("success") ? "green.400" : "red.400"}
            >
              {feedback}
            </Box>
          )}
        </form>
      </Box>
    </Box>
  );
}
