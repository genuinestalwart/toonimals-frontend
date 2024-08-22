"use client";
import {
	Modal,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import AnimalForm from "@/components/forms/AnimalForm";
import useAxiosPublic from "@/hooks/useAxiosPublic";
const apiKey = process.env.NEXT_PUBLIC_imgbb_api_key;
const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;

interface Props {
	category: string;
	openAnimal: boolean;
	refetch: Function;
	setOpenAnimal: Function;
}

const AddAnimal: React.FC<Props> = ({
	category,
	openAnimal,
	refetch,
	setOpenAnimal,
}) => {
	const [loading, setLoading] = useState(false);
	const [image, setImage] = useState<File>();
	const fileRef = useRef<HTMLInputElement>(null);
	const axiosPublic = useAxiosPublic();

	const handleChange = ({ target }: any) => {
		if (/(\.png|\.jpg|\.jpeg)$/.test(target.files[0].name)) {
			setImage(target.files[0]);
		} else {
			if (fileRef.current) {
				fileRef.current.value = "";
			}
		}
	};

	const handleClose = () => {
		setImage(undefined);

		if (fileRef.current) {
			fileRef.current.value = "";
		}

		setOpenAnimal(false);
	};

	const handleUpload = async () => {
		try {
			const res = await axiosPublic.post(
				url,
				{ image },
				{ headers: { "Content-Type": "multipart/form-data" } }
			);

			return res.data.data.url;
		} catch (error) {
			return false;
		}
	};

	const onSubmit = async (data: any) => {
		setLoading(true);
		const link = await handleUpload();

		if (link) {
			const animal = { category, image: link, name: data.name };

			axiosPublic.post("/animals", animal).then(() => {
				refetch();
				handleClose();
				setLoading(false);
			});
		}
	};

	return (
		<Modal
			isCentered
			isOpen={openAnimal}
			motionPreset='slideInBottom'
			onClose={() => handleClose()}
			size='sm'>
			<ModalOverlay />

			<ModalContent color='black'>
				<ModalHeader fontWeight={400}>Add Animal</ModalHeader>

				<AnimalForm
					fileRef={fileRef}
					handleChange={handleChange}
					image={image}
					loading={loading}
					onSubmit={onSubmit}
				/>

				<ModalFooter />
			</ModalContent>
		</Modal>
	);
};

export default AddAnimal;
