import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";



const SocialLogin = () => {
    const {googleSignIn } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(res => {
            console.log(res.user);
            const userInfo = {
                email: res.user?.email,
                name: res.user?.displayName,
                photo: res.user?.photoURL,
                coin: 50
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data)
                navigate('/')
            })

        })
    }

    return (
        <div className="">
           <div className="">
            <button
            onClick={handleGoogleSignIn}
             className="btn border-none bg-rose-600 text-white">
             Google Login <FaGoogle className="text-white"></FaGoogle>
            </button>
            </div> 
        </div>
    );
};

export default SocialLogin;