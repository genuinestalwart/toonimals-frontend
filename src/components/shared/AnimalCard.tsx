import {
	AspectRatio,
	Box,
	Card,
	CardBody,
	Image,
	Text,
} from "@chakra-ui/react";

interface Animal {
	_id: string;
	category: string;
	image: string;
	name: string;
}

const AnimalCard = ({ animal }: { animal: Animal }) => {
	return (
		<Box className='space-y-2' textAlign='center'>
			<Card bgColor='#050505' borderWidth={1} borderColor='#141414'>
				<CardBody py={8}>
					<AspectRatio ratio={1}>
						<Box>
							<Image
								alt={animal.name}
								src={animal.image}
								w='100%'
							/>
						</Box>
					</AspectRatio>
				</CardBody>
			</Card>

			<Text textTransform='uppercase'>{animal.name}</Text>
		</Box>
	);
};

export default AnimalCard;
