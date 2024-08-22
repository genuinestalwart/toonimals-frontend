import { Button } from "@chakra-ui/react";

interface Props {
	children: React.ReactNode;
	colorScheme: string;
	onClick: Function;
}

const RoundButton: React.FC<Props> = ({ children, colorScheme, onClick }) => {
	return (
		<Button
			colorScheme={colorScheme}
			fontWeight='400'
			minW='auto'
			onClick={() => onClick()}
			px={6}
			sx={{ borderRadius: "24" }}>
			{children}
		</Button>
	);
};

export default RoundButton;
