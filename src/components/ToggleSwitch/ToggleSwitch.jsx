import {
  Switch,
  FormControl,
  FormLabel,
  useColorMode,
  Box,
} from "@chakra-ui/react";
import "/src/app/globals.css";

export default function ToggleSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <FormControl
      className="borderAll"
      display="flex"
      alignItems="center"
      width="auto"
    >
      <FormLabel htmlFor="theme-toggle" mb="0">
        {colorMode === "light"}
      </FormLabel>
      <Switch
        id="theme-toggle"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="yellow"
        aria-label="Toggle theme"
      />
    </FormControl>
  );
}
