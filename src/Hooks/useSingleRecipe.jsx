import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useParams } from "react-router-dom";



const useSingleRecipe = () => {
    const axiosPublic = useAxiosPublic()
    const {id} = useParams()
    console.log(id);


    const {data: recipe = {}, isPending: loading, refetch } =useQuery({
        queryKey: ['recipe',id],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/recipes/${id}`)
            return res.data;
        }
    })


    return [recipe, loading, refetch]
};

export default useSingleRecipe;

