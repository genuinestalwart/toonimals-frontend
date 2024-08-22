import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "@/app/globals.css";
import Providers from "@/components/Providers";

const spaceGrotesk = Space_Grotesk({
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-space-grotesk",
	subsets: ["latin"],
	style: ["normal"],
	display: "swap",
});

export const metadata: Metadata = {
	description: "A simple cartoon-like animal listing site.",
	title: "Toonimals",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html className={`text-[18px] ${spaceGrotesk.variable}`} lang='en'>
			<body className='bg-black font-space-grotesk text-white/80'>
				<div className='container'>
					<Providers>{children}</Providers>
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
