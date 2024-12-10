import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Box } from "@chakra-ui/react";

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "black",
        }}
        suppressHydrationWarning
      >
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
