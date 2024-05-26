import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useMoreRecipes = () => {
    const axiosPublic = useAxiosPublic()


    const {data: moreRecipes = [], isPending: loading, refetch } =useQuery({
        queryKey: ['moreRecipes'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/moreRecipes')
            return res.data;
        }
    })


    return [moreRecipes, loading, refetch]
};

export default useMoreRecipes;