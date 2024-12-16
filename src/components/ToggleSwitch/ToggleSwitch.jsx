import { Switch, FormControl, FormLabel } from "@chakra-ui/react";

export default function ToggleSwitch({ isChecked, onChange }) {
  return (
    <FormControl display="flex" alignItems="center" width="auto">
      <FormLabel htmlFor="theme-toggle" mb="0">
        {isChecked ? "Dark Mode" : "Theme"}
      </FormLabel>
      <Switch
        id="theme-toggle"
        isChecked={isChecked}
        onChange={onChange}
        colorScheme="yellow"
        aria-label="Toggle theme"
      />
    </FormControl>
  );
}
