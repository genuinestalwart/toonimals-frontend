import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	plugins: [],
	theme: {
		container: { center: true },
		extend: {
			fontFamily: { "space-grotesk": ["var(--font-space-grotesk)"] },
			screens: { sm: "32em" },
		},
	},
};

export default config;
