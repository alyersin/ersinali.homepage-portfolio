import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Box } from "@chakra-ui/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: "black" }}>
        <Box>
          <Header />
          <Box px={{ base: 4, md: 8 }} py={{ base: 4, md: 8 }}>
            {children}
          </Box>
          <Footer />
        </Box>
      </body>
    </html>
  );
}
