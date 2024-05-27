import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../../components/socialLogin/SocialLogin";
import Swal from "sweetalert2";

const RecipeCard = ({ recipe }) => {
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
                <Link to={`/recipe-details/${_id}`} >
                <button className="px-5 py-3 border-0 outline outline-rose-600 rounded-lg text-lg font-semibold bg-rose-600 hover:bg-transparent hover:text-black hover:duration-100 hover:ease-in text-white">
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
