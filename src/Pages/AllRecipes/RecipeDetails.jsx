
import useSingleRecipe from "../../Hooks/useSingleRecipe";
import MoreRecipes from "./MoreRecipes";





const RecipeDetails = () => {
    const [recipe] = useSingleRecipe()
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
    console.log(recipe);



    return (
       <div className="grid grid-cols-5">
        <div  className="col-span-3">
        <div>
        <div className="card rounded-lg bg-base-100 shadow-xl gap-2 px-10 py-10">
          <figure>
            <img className="w-full h-96 rounded-lg" src={image} alt="Album" />
          </figure>
          <div className="card-body pt-5">
            <h2 className="card-title text-4xl font-semibold">{name} ({category})</h2>
            <h3 className="text-xl font-medium">Country Origin: {country}</h3>
            <p className="text-lg">{details} </p>
            <h3>Watch Recipe Video</h3>
            <p className="text-xl font-medium">Creator Email: {email}</p>
            <h3 className="text-xl font-medium">Purchased_by:</h3>
            <ul className="list-disc ml-4 text-base">
              {  purchased_by?.map((item, index) => (
                <li key={index}> {item}</li>
              )) }
            </ul>
          </div>
        </div>
      </div>
        </div>
        <div className="col-span-2">
            <div>
               <MoreRecipes/>
            </div>
        </div>
       </div>
    );
};

export default RecipeDetails;