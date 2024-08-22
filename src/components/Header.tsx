"use client";
import {
	ButtonGroup,
	Container,
	Flex,
	useToast,
	UseToastOptions,
} from "@chakra-ui/react";
import RoundButton from "@/components/shared/RoundButton";

interface Props {
	active: string;
	categories: Array<{ _id: string; name: string }>;
	openAnimal: boolean;
	setActive: Function;
	setOpenAnimal: Function;
	setOpenCategory: Function;
}

const message: UseToastOptions = {
	containerStyle: { color: "orange.600" },
	position: "bottom-right",
	status: "warning",
	title: "Please select a category",
	variant: "left-accent",
};

const Header: React.FC<Props> = ({
	active,
	categories,
	openAnimal,
	setActive,
	setOpenAnimal,
	setOpenCategory,
}) => {
	const toast = useToast();

	return (
		<Container
			as='header'
			h={["auto", null, 24]}
			maxW='120ch'
			py={[4, null, 0]}>
			<Flex
				align={["center", null, "end"]}
				flexDirection={["column", null, "row"]}
				gap={[4, null, 0]}
				h='100%'
				justify={["end", null, "space-between"]}>
				<ButtonGroup
					alignItems='end'
					display='flex'
					h='100%'
					w={["100%", null, "50%"]}
					overflowX='auto'
					spacing={4}
					variant='outline'>
					{categories.map((item, i) => (
						<RoundButton
							colorScheme={active === item._id ? "green" : "red"}
							key={i}
							onClick={() => {
								toast.closeAll();
								setActive(active === item._id ? "" : item._id);
							}}>
							{item.name}
						</RoundButton>
					))}
				</ButtonGroup>

				<ButtonGroup spacing={4} variant='outline'>
					<RoundButton
						colorScheme='white'
						onClick={() => {
							active
								? setOpenAnimal(!openAnimal)
								: toast(message);
						}}>
						Add Animal
					</RoundButton>

					<RoundButton
						colorScheme='white'
						onClick={() => setOpenCategory(true)}>
						Add Category
					</RoundButton>
				</ButtonGroup>
			</Flex>
		</Container>
	);
};

export default Header;
