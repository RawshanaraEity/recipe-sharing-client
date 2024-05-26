import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useRecipes = () => {
    const axiosPublic = useAxiosPublic()


    const {data: recipes = [], isPending: loading, refetch } =useQuery({
        queryKey: ['recipes'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/recipes')
            return res.data;
        }
    })


    return [recipes, loading, refetch]
};

export default useRecipes;