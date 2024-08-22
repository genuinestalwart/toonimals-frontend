"use client";
import AnimalCard from "@/components/shared/AnimalCard";
import Header from "@/components/Header";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import {
	Container,
	Flex,
	ScaleFade,
	SimpleGrid,
	Spinner,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import AddAnimal from "@/components/modals/AddAnimal";
import AddCategory from "@/components/modals/AddCategory";

interface Item {
	_id: string;
	category: string;
	image: string;
	name: string;
}

const HomePage = () => {
	const [active, setActive] = useState("");
	const [openAnimal, setOpenAnimal] = useState(false);
	const [openCategory, setOpenCategory] = useState(false);
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

	return cLoading ? (
		<Flex align='center' h='100vh' justify='center' w='100%'>
			<Spinner color='white' size='xl' />
		</Flex>
	) : (
		<ScaleFade in initialScale={0.5}>
			<Header
				active={active}
				categories={categories}
				openAnimal={openAnimal}
				setActive={setActive}
				setOpenAnimal={setOpenAnimal}
				setOpenCategory={setOpenCategory}
			/>

			{aLoading ? (
				<Flex
					align='center'
					className='h-[calc(100vh_-_6rem)]'
					justify='center'
					w='100%'>
					<Spinner color='white' size='xl' />
				</Flex>
			) : (
				<Container as='main' maxW='120ch' py={12}>
					<SimpleGrid columns={[2, null, 3, 5, 6]} spacing={8}>
						{animals.map((item: Item, i: number) => (
							<AnimalCard animal={item} key={i} />
						))}
					</SimpleGrid>
				</Container>
			)}

			<AddAnimal
				category={active}
				openAnimal={openAnimal}
				refetch={aRefetch}
				setOpenAnimal={setOpenAnimal}
			/>

			<AddCategory
				openCategory={openCategory}
				refetch={cRefetch}
				setOpenCategory={setOpenCategory}
			/>
		</ScaleFade>
	);
};

export default HomePage;
