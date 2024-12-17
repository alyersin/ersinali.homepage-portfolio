import { Box, FormControl, FormLabel, Switch } from "@chakra-ui/react";
import React from "react";

export default function ToggleSwitch({
  isChecked,
  onChange,
  variant = "default",
}) {
  return (
    <FormControl
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="auto"
      position="relative"
    >
      {/* Sun-Moon Variant */}
      {variant === "sun-moon" && (
        <Box
          onClick={onChange}
          cursor="pointer"
          borderRadius="50px"
          w="200px"
          h="100px"
          position="relative"
          bgGradient={
            isChecked
              ? "linear(to-b, midnightblue, rebeccapurple)"
              : "linear(to-b, aqua, skyblue)"
          }
          transition="background-image 0.3s ease"
        >
          {/* Notch (Sun/Moon Toggle Button) */}
          <Box
            position="absolute"
            top="5px"
            left={isChecked ? "105px" : "5px"}
            w="90px"
            h="90px"
            borderRadius="50%"
            bg={isChecked ? "whitesmoke" : "yellow.400"}
            boxShadow={
              isChecked
                ? "0 0 5px whitesmoke"
                : "0 0 8px rgba(255, 215, 0, 0.8)"
            }
            transition="all 0.3s ease"
          >
            {/* Craters for Moon */}
            {isChecked && (
              <>
                <Box
                  position="absolute"
                  top="15px"
                  left="5px"
                  w="40px"
                  h="15px"
                  bg="burlywood"
                  borderRadius="50%"
                  opacity="0.4"
                  transform="rotate(-45deg)"
                  boxShadow="inset 0 5px 5px rgba(0, 0, 0, 0.4)"
                />
                <Box
                  position="absolute"
                  top="15px"
                  right="10px"
                  w="25px"
                  h="15px"
                  bg="burlywood"
                  borderRadius="50%"
                  opacity="0.4"
                  transform="rotate(45deg)"
                  boxShadow="inset 0 5px 5px rgba(0, 0, 0, 0.4)"
                />
              </>
            )}
          </Box>

          {/* Animated Shapes */}
          <Box>
            {/* Small Shape */}
            <Box
              position="absolute"
              top="50%"
              left="60%"
              w={isChecked ? "5px" : "50px"}
              h="5px"
              bg={isChecked ? "lightgray" : "whitesmoke"}
              borderRadius="50%"
              boxShadow={isChecked ? "0 0 10px 2px violet" : "none"}
              transform={isChecked ? "translate(-40px, 0)" : "none"}
              transition="all 0.3s ease"
            />
            {/* Medium Shape */}
            <Box
              position="absolute"
              top="25%"
              left="25%"
              w={isChecked ? "10px" : "75px"}
              h={isChecked ? "10px" : "10px"}
              bg={isChecked ? "lightgray" : "whitesmoke"}
              borderRadius="50%"
              boxShadow={isChecked ? "0 0 10px 2px violet" : "none"}
              transform={isChecked ? "translate(10px, 0)" : "none"}
              transition="all 0.3s ease"
            />
            {/* Large Shape */}
            <Box
              position="absolute"
              bottom="20px"
              left="25%"
              w={isChecked ? "15px" : "100px"}
              h={isChecked ? "15px" : "15px"}
              bg={isChecked ? "lightgray" : "whitesmoke"}
              borderRadius="50%"
              boxShadow={isChecked ? "0 0 10px 2px violet" : "none"}
              transform={isChecked ? "translate(-10px, 0)" : "none"}
              transition="all 0.3s ease"
            />
          </Box>
        </Box>
      )}

      {/* Default Chakra Switch */}
      {variant === "default" && (
        <>
          <FormLabel htmlFor="theme-toggle" mb="0" fontSize="sm">
            {isChecked ? "Dark Mode" : "Theme"}
          </FormLabel>
          <Switch
            id="theme-toggle"
            isChecked={isChecked}
            onChange={onChange}
            colorScheme="yellow"
          />
        </>
      )}
    </FormControl>
  );
}
