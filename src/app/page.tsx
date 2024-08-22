"use client";
import AnimalCard from "@/components/AnimalCard";
import Header from "@/components/Header";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { Container, ScaleFade, SimpleGrid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface Item {
	_id: string;
	category: string;
	image: string;
	name: string;
}

const HomePage = () => {
	const [active, setActive] = useState("");
	const axiosPublic = useAxiosPublic();

	const {
		data: categories = [],
		isLoading: cLoading,
		refetch: cRefetch,
	} = useQuery({
		queryKey: ["categories"],
		queryFn: async () => {
			const { data } = await axiosPublic.get("/categories");
			return data;
		},
	});

	const {
		data: animals = [],
		isLoading: aLoading,
		refetch: aRefetch,
	} = useQuery({
		queryKey: ["animals", active],
		queryFn: async () => {
			const { data } = await axiosPublic.get(
				active ? `/animals?category=${active}` : "/animals"
			);

			return data;
		},
	});

	return (
		<ScaleFade in initialScale={0.5}>
			<Header
				active={active}
				categories={categories}
				setActive={setActive}
			/>

			<Container as='main' maxW='120ch' py={12}>
				<SimpleGrid columns={[1, 2, 4, 6]} spacing={8}>
					{animals.map((item: Item, i: number) => (
						<AnimalCard animal={item} key={i} />
					))}
				</SimpleGrid>
			</Container>
		</ScaleFade>
	);
};

export default HomePage;
