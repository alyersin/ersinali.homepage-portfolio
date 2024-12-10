import { useState } from "react";
import {
  Box,
  Button,
  Text,
  Divider,
  FormControl,
  Heading,
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
      color="#149AD7"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      // borderRadius="5px"
      boxShadow="lg"
    >
      {/* <Image
        src="/assets/bg-6.jpg"
        alt="Logo"
        borderRadius="5px"
        draggable={false}
        width="60%"
        height={260}
        margin="auto"
        mx="auto"
      /> */}
      <Box
        className="borderAll"
        width={{ base: "100%", md: "60%" }}
        margin="auto"
        height="auto"
        padding="10px 10px 0 10px"
      >
        <Heading mb={24}>Contact Form</Heading>

        <form onSubmit={handleSubmit}>
          <FormControl mb={10} isRequired className="borderAll">
            <Input
              type="text"
              name="name"
              placeholder={placeholders.name}
              onFocus={() => handleFocus("name")}
              onBlur={() => handleBlur("name", "Enter your name")}
              fontSize={15}
              fontFamily="'Poppins', sans-serif"
              value={formData.name}
              onChange={handleChange}
              bgColor="#141414"
              sx={{
                "::placeholder": {
                  color: "#149AD7",
                },
              }}
              border="none"
              width={440}
              height={36}
              padding={"0 10px 0 10px"}
            />
          </FormControl>
          {/* <Divider my={4} border="1px solid #149AD7" /> */}
          <FormControl mb={10} isRequired className="borderAll">
            <Input
              type="email"
              name="email"
              placeholder={placeholders.email}
              onFocus={() => handleFocus("email")}
              onBlur={() => handleBlur("email", "Enter your email")}
              fontSize={15}
              fontFamily="'Poppins', sans-serif"
              value={formData.email}
              onChange={handleChange}
              bgColor="#141414"
              sx={{
                "::placeholder": {
                  color: "#149AD7",
                },
              }}
              border="none"
              width="100%"
              height={36}
              padding={"0 10px 0 10px"}
            />
          </FormControl>
          {/* <Divider my={4} border="1px solid #149AD7" /> */}

          <FormControl mb={10} isRequired className="borderAll">
            <Textarea
              name="message"
              placeholder={placeholders.message}
              onFocus={() => handleFocus("message")}
              onBlur={() => handleBlur("message", "Enter your message")}
              fontSize={15}
              fontFamily="'Poppins', sans-serif"
              value={formData.message}
              onChange={handleChange}
              sx={{
                "::placeholder": {
                  color: "#149AD7",
                },
              }}
              bgColor="#141414"
              color="white"
              border="none"
              width="100%"
              height={90}
              padding={"6px 10px 0 10px"}
            />
          </FormControl>
          {/* <Divider my={4} border="1px solid #149AD7" /> */}

          <Button
            type="submit"
            cursor="pointer"
            boxSize={34}
            bgColor="#ffbd39"
            color="black"
            _focus={{
              boxShadow: "none",
            }}
            _hover={{
              boxShadow: "none",
            }}
            _active={{
              boxShadow: "none",
              outline: "none",
            }}
            border="none"
            borderRadius="5px"
            padding={18}
            fontSize={14}
            fontWeight={700}
            isLoading={loading}
            width="100%"
          >
            SEND MESSAGE
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
