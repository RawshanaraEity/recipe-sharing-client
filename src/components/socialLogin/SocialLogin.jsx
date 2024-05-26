import { FaGoogle } from "react-icons/fa";

// import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";




const SocialLogin = () => {
    const {googleSignIn } = useAuth()
    // const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(res => {
            console.log(res.user);
            // const userInfo = {
            //     email: res.user?.email,
            //     name: res.user?.displayName
            // }
            // axiosPublic.post('/users', userInfo)
            // .then(res => {
            //     console.log(res.data)
                navigate('/')
            // })

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