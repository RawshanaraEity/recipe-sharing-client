
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTIONG_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddRecipe = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
     
      const recipeItem = {
        name: data.name,
        category: data.category,
        watchCount: parseFloat(data.watchCount),
        purchased_by: data.purchased_by,
        details: data.details,
        country: data.country,
        video: data.video, 
        image: res.data.data.display_url,
        email: user.email,
      };

      const recipeRes = await axiosPublic.post('/recipes', recipeItem);
      console.log(recipeRes.data);
      if (recipeRes.data.insertedId) {
        // show success popup
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the recipes`,
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    }
    console.log(res.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full lg:w-11/12 mx-auto bg-gray-50 p-5 md:p-3 lg:p-10 shadow-lg">
          <div className="flex flex-col md:flex-row gap-5">
            {/* Recipe Name */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-lg font-medium">Recipe Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="input input-bordered"
              />
              {errors.name && <span className="text-red-600">This field is required</span>}
            </div>

            {/* Image */}
            <div className="form-control flex-1">
              <label className="label mb-2">
                <span className="label-text text-lg font-medium">Image URL</span>
              </label>
              <input
                type="file"
                {...register("image", { required: true })}
              />
              {errors.image && <span className="text-red-600">This field is required</span>}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            {/* Category */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-lg font-medium">Category</span>
              </label>
              <select {...register("category", { required: true })} className="input input-bordered">
                        <option value="">Select Category</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Rice">Rice</option>
                        <option value="Seafood">Seafood</option>
                        <option value="Chicken">Chicken</option>
                        <option value="Fried">Fried</option>
                        <option value="Curry">Curry</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Dessert">Dessert</option>
              </select>
              {errors.category && <span className="text-red-600">This field is required</span>}
            </div>
              {/* YouTube Link */}
              <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-lg font-medium">YouTube Video Link</span>
              </label>
              <input
                type="text"
                {...register("video", { required: true })}
                className="input input-bordered"
              />
              {errors.video && <span className="text-red-600">This field is required</span>}
            </div>
          </div>


          <div className="flex flex-col md:flex-row gap-5">
            {/* Details */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-lg font-medium">Details</span>
              </label>
              <textarea
                {...register("details", { required: true })}
                className="input input-bordered"
              />
              {errors.details && <span className="text-red-600">This field is required</span>}
            </div>

            {/* Country */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-lg font-medium">Country</span>
              </label>
              <input
                {...register("country", { required: true })}
                className="input input-bordered"
              />
              {errors.country && <span className="text-red-600">This field is required</span>}
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-control w-28 mx-auto mt-6">
            <input className="btn bg-rose-600 text-white" type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;

