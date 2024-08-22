"use client";
import { theme } from "@/utilities/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const client = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ChakraProvider theme={theme}>
			<QueryClientProvider client={client}>
				{children}
			</QueryClientProvider>
		</ChakraProvider>
	);
};

export default Providers;
