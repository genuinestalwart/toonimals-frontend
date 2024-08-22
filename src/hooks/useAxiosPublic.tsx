import axios from "axios";

const axiosPublic = axios.create({
	baseURL: "https://toonimals-backend.vercel.app/",
});

const useAxiosPublic = () => axiosPublic;
export default useAxiosPublic;
