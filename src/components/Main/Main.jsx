import { Box } from "@chakra-ui/react";
import AccordionCards from "../AccordionCards/AccordionCards";
import Carousel from "../Carousel/Carousel";

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
      bg="gray.900"
      maxWidth="1280px"
      minH="100vh"
      color="white"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      px={{ base: 4, md: 8 }} // Responsive padding
      gap={{ base: 8, md: 12 }} // Adjust gap between components for smaller screens
    >
      <Box width="100%">
        <AccordionCards />
      </Box>

      <Box width="100%">
        <Carousel items={images} />
      </Box>
    </Box>
  );
}
