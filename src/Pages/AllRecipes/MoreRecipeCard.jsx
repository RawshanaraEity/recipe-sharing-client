
const MoreRecipeCard = ({moreRecipe}) => {
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
      } = moreRecipe;
      
    return (
        <div>

            <div className="card h-44 rounded-lg lg:card-side bg-base-100 shadow-xl px-4 py-2">
        <figure>
          <img className="w-44 h-40 py-2 rounded-lg" src={image} alt="Album" />
        </figure>
        <div className="card-body gap-2">
        <p className="text-lg text-red-600 font-semibold">{category} </p>
          <h2 className="card-title text-lg font-semibold">{name}</h2>
          <div className="card-actions justify-start mt-3">
           
          </div>
        </div>
      </div>
        </div>
    );
};

export default MoreRecipeCard;