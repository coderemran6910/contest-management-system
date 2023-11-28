import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://contest-management-iota.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;