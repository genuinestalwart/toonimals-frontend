"use client";
import { Button, FormControl, Input, ModalBody } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
	loading: boolean;
	onSubmit: SubmitHandler<any>;
}

const CategoryForm: React.FC<Props> = ({ loading, onSubmit }) => {
	const { register, handleSubmit } = useForm();

	return (
		<ModalBody
			className='space-y-6'
			as='form'
			onSubmit={handleSubmit(onSubmit)}>
			<FormControl variant='filled'>
				<Input
					bgColor='#f2f2f2'
					borderWidth={0}
					placeholder='Name'
					_placeholder={{ color: "black" }}
					{...register("name")}
					required
				/>
			</FormControl>

			<Button
				bgColor='black'
				color='white'
				_hover={{ bgColor: "black" }}
				isLoading={loading}
				loadingText='Creating...'
				type='submit'
				w='100%'>
				Save
			</Button>
		</ModalBody>
	);
};

export default CategoryForm;
