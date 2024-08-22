import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	breakpoints: { sm: "32em", lg: "64em" },
	config: { initialColorMode: "light", useSystemColorMode: false },
	fonts: {
		body: "var(--font-space-grotesk)",
		heading: "var(--font-space-grotesk)",
	},
});
