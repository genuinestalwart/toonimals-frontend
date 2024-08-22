"use client";
import {
	Modal,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import CategoryForm from "@/components/forms/CategoryForm";

interface Props {
	openCategory: boolean;
	refetch: Function;
	setOpenCategory: Function;
}

const AddCategory: React.FC<Props> = ({
	openCategory,
	refetch,
	setOpenCategory,
}) => {
	const [loading, setLoading] = useState(false);
	const axiosPublic = useAxiosPublic();

	const onSubmit = async (data: any) => {
		setLoading(true);

		axiosPublic.post("/categories", data).then(() => {
			refetch();
			setOpenCategory(false);
			setLoading(false);
		});
	};

	return (
		<Modal
			isCentered
			isOpen={openCategory}
			motionPreset='slideInBottom'
			onClose={() => setOpenCategory(false)}
			size='sm'>
			<ModalOverlay />

			<ModalContent color='black'>
				<ModalHeader fontWeight={400}>Add Category</ModalHeader>
				<CategoryForm loading={loading} onSubmit={onSubmit} />
				<ModalFooter />
			</ModalContent>
		</Modal>
	);
};

export default AddCategory;
