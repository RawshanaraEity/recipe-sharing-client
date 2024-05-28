import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useGetUsers from "../../Hooks/useGetUsers";
import useAuth from "../../Hooks/useAuth";

const RecipeCard = ({ recipe }) => {
    const navigate = useNavigate();
    const [singleUser] = useGetUsers();
    const coin = singleUser?.coin;
    const axios = useAxiosPublic()
    const {user} = useAuth()
    
  const {
    _id,
    image,
    name,
    details,
    country,
    video,
    category,
    watchCount,
    purchased_by,
    email,
  } = recipe;

   const handleAlert = () => {
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Please login",
            showConfirmButton: false,
            timer: 1000,
          })
    }


    const handleView = () => {
     
    
      if (coin < 10) {
        Swal.fire({
          title: "Insufficient Coins",
          text: "You need at least 10 coins to view the details.",
          icon: "error",
        });
        return;
      }
    
      Swal.fire({
        title: "Are you sure?",
        text: "You will be charged 10 coins to view the details.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, view details!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.patch("/users", {
          
              email: user?.email,
              name: user?.displayName,
              coin: coin - 10
           
          })
            .then((response) => {
              if (response.data) {
    
                Swal.fire({
                  title: "Success",
                  text: "10 coins have been deducted from your account.",
                  icon: "success",
                }).then(() => {
                  navigate(`/recipe-details/${_id}`);
                });
              } else {
                Swal.fire({
                  title: "Error",
                  text: response.data.message,
                  icon: "error",
                });
              }
            })
            .catch((error) => {
              Swal.fire({
                title: "Error",
                text: "There was an error processing your request.",
                icon: "error",
              });
              console.error("Error processing transaction:", error);
            });
        }
      });
    };



  return (
    <div>
      <div className="card rounded-lg lg:card-side bg-base-100 shadow-xl gap-2 px-10 py-4">
        <figure>
          <img className="w-96 h-72 rounded-lg hover:scale-[1.07] duration-1000" src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl font-semibold">{name} ({category}) </h2>
          <p className="text-xl font-medium">Purchased_by:</p>
          <ul className="list-disc ml-4 text-base">
            {  purchased_by?.map((item, index) => (
              <li key={index}> {item}</li>
            )) }
          </ul>
          <p className="text-xl font-medium">Creator Email: {email}</p>
          <p className="text-xl font-medium">Country Origin: {country}</p>
          <div className="card-actions justify-start mt-3">
           {
            user? (
                <Link>
                <button onClick={handleView} className="px-5 py-3 border-0 outline outline-rose-600 rounded-lg text-lg font-semibold bg-rose-600 hover:bg-transparent hover:text-black hover:duration-100 hover:ease-in text-white">
                  View The Recipe
                </button>
                </Link>
            ) : (
                <button onClick={handleAlert} className="px-5 py-3 border-0 outline outline-rose-600 rounded-lg text-lg font-semibold bg-rose-600 hover:bg-transparent hover:text-black hover:duration-100 hover:ease-in text-white">
                View The Recipe
              </button>
            )
           }
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
