import { useState } from "react";
import useSingleRecipe from "../../Hooks/useSingleRecipe";
import MoreRecipes from "./MoreRecipes";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import toast from "react-hot-toast";

const RecipeDetails = () => {
  const [recipe] = useSingleRecipe();
  const {
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
  console.log(recipe);

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLikeClick = () => {
    setLiked(true);
    setDisliked(false);
    showToast("Liked");
  };

  const handleDislikeClick = () => {
    setDisliked(true);
    setLiked(false);
    showToast("Disliked");
  };

  const showToast = (message) => {
    toast.success(message, {
      autoClose: 2000,
    });
  };

  // Extract YouTube video ID from the URL
  const getYoutubeVideoId = (url) => {
    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.+\?v=)|youtu\.be\/)([^"&?\/\s]{11})/gi;
    const match = regex.exec(url);
    return match ? match[1] : null;
  };

  const videoId = getYoutubeVideoId(video);

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-3">
        <div>
          <div className="card rounded-lg bg-base-100 shadow-xl gap-2 px-10 py-10">
            <figure>
              <img className="w-full h-96 rounded-lg" src={image} alt={name} />
            </figure>
            <div className="flex justify-end items-center gap-6 text-green-700 text-xl">
              <button
                className={liked ? "text-rose-600" : "text-gray-400"}
                onClick={handleLikeClick}
              >
                <AiFillLike />
              </button>
              <button
                className={disliked ? "text-rose-600" : "text-gray-400"}
                onClick={handleDislikeClick}
              >
                <AiFillDislike />
              </button>
            </div>
            <div className="card-body pt-5">
              <h2 className="card-title text-4xl font-semibold">
                {name} ({category})
              </h2>
              <h3 className="text-xl font-medium">Country Origin: {country}</h3>
              <p className="text-lg">{details}</p>
              <h3 className="text-xl font-medium">Watch Recipe Video</h3>
              {videoId ? (
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <p className="text-red-500">Invalid YouTube URL</p>
              )}
              <p className="text-xl font-medium">Creator Email: {email}</p>
              <h3 className="text-xl font-medium">Purchased_by:</h3>
              <ul className="list-disc ml-4 text-base">
                {purchased_by?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div>
          <MoreRecipes />
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
