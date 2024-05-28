import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://recipe-sharing-server-fawn.vercel.app'
})

const useAxiosPublic = () => {
   return axiosPublic;
};

export default useAxiosPublic;