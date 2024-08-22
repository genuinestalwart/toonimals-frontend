"use client";
import { Button, ButtonGroup, Container, Flex } from "@chakra-ui/react";

interface Props {
	active: string;
	categories: Array<{ _id: string; name: string }>;
	setActive: Function;
}

const Header: React.FC<Props> = ({ active, categories, setActive }) => {
	return (
		<Container as='header' h={24} maxW='120ch'>
			<Flex align='end' h='100%' justify='space-between'>
				<ButtonGroup spacing={4} variant='outline'>
					{categories.map((item, i) => (
						<Button
							colorScheme={active === item._id ? "green" : "red"}
							key={i}
							onClick={() =>
								setActive(active === item._id ? "" : item._id)
							}
							px={8}
							sx={{ borderRadius: "24" }}>
							{item.name}
						</Button>
					))}
				</ButtonGroup>
			</Flex>
		</Container>
	);
};

export default Header;
