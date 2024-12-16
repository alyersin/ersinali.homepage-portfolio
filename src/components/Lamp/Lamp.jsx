"use client";

import React from "react";
import { Box } from "@chakra-ui/react";
import "../../app/globals.css";

export default function Lamp({ isLightOn }) {
  return (
    <Box
      className="borderAllRed"
      width={{ base: "150px", sm: "150px", md: "410px" }}
      height={{ base: "240px", sm: "300px", md: "430px" }}
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      mx="auto"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 410"
        width="100%"
        height="100%"
      >
        {/* CEILING MOUNT */}
        <rect x="85" y="0" width="30" height="40" fill="#333" rx="5" />

        {/* HANGING CABLE */}
        <rect x="98" y="40" width="4" height="124" fill="#444" />

        {/* LAMP SHADE */}
        <path
          d="M 50 200 Q 100 130 150 200 L 100 200 Z"
          fill="#666"
          stroke="#000"
          strokeWidth="2"
        />

        {/* LIGHT BULB*/}
        <circle
          cx="100"
          cy="200"
          r="12"
          fill={isLightOn ? "#FFD700" : "#666"}
          stroke={isLightOn ? "#FAD02E" : "#555"}
          strokeWidth="2"
          style={{
            transition: "fill 0.5s ease-in-out, stroke 0.5s ease-in-out",
          }}
        />

        {/* LIGHT GLOW */}
        <g
          style={{
            opacity: isLightOn ? 0.7 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <defs>
            {/* LIGHT GLOW GRADIENT */}
            <radialGradient id="lightGlowDynamic" cx="50%" cy="55%" r="40%">
              <stop
                offset="0%"
                stopColor={
                  isLightOn
                    ? "rgba(255, 240, 150, 0.8)"
                    : "rgba(100, 100, 100, 0.8)"
                }
                style={{ transition: "stop-color 0.5s ease-in-out" }}
              />
              <stop
                offset="100%"
                stopColor={
                  isLightOn
                    ? "rgba(255, 240, 150, 0)"
                    : "rgba(100, 100, 100, 0)"
                }
                style={{ transition: "stop-color 0.5s ease-in-out" }}
              />
            </radialGradient>
          </defs>

          {/* LIGHT GLOW*/}
          <polygon
            points="160,162 0,400 340,400"
            fill="url(#lightGlowDynamic)"
            transform="translate(-60, 0)"
          />
        </g>
      </svg>
    </Box>
  );
}
