"use client";
import {
	Box,
	Button,
	Flex,
	FormControl,
	Input,
	ModalBody,
} from "@chakra-ui/react";
import { ChangeEventHandler, RefObject } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
	fileRef: RefObject<HTMLInputElement>;
	handleChange: ChangeEventHandler<HTMLInputElement>;
	image: File | undefined;
	loading: boolean;
	onSubmit: SubmitHandler<any>;
}

const AnimalForm: React.FC<Props> = ({
	fileRef,
	handleChange,
	image,
	loading,
	onSubmit,
}) => {
	const { register, handleSubmit } = useForm();

	return (
		<ModalBody
			className='space-y-4'
			as='form'
			onSubmit={handleSubmit(onSubmit)}>
			<FormControl variant='filled'>
				<Input
					bgColor='#f2f2f2'
					borderWidth={0}
					placeholder='Animal Name'
					_placeholder={{ color: "black" }}
					{...register("name")}
					required
				/>
			</FormControl>

			<Box position='relative'>
				<Flex
					align='center'
					bgColor='#f2f2f2'
					borderRadius='md'
					className='h-10'
					justify='space-between'
					px={4}>
					<span>Image</span>

					<span className='bg-[#cccccc] px-2 py-0.5 rounded-lg text-sm truncate'>
						{image ? image.name : "upload"}
					</span>
				</Flex>

				<input
					accept='image/png,image/jpeg'
					className='absolute hover:cursor-pointer h-full inset-0 opacity-0 rounded-lg w-full z-10'
					id='image'
					onChange={handleChange}
					ref={fileRef}
					required
					type='file'
				/>
			</Box>

			<Button
				bgColor='black'
				color='white'
				_hover={{ bgColor: "black" }}
				isLoading={loading}
				loadingText='Creating...'
				type='submit'
				w='100%'>
				Create Animal
			</Button>
		</ModalBody>
	);
};

export default AnimalForm;
