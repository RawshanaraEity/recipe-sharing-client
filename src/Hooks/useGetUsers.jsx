
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';

const useGetUsers = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useAuth()
    const name = user?.displayName
    console.log(name,user);


    const {data: singleUser = {}, isPending: loading, refetch } =useQuery({
        queryKey: ['user', name],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/users/${name}`)
            return res.data;
        }
    })


    return [singleUser, loading, refetch]
};

export default useGetUsers;

