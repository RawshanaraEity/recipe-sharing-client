import useMoreRecipes from "../../Hooks/useMoreRecipes";
import MoreRecipeCard from "./MoreRecipeCard";

const MoreRecipes = () => {
    const [moreRecipes] = useMoreRecipes()
  
    return (
        <div>
           
            <div className="grid grid-cols-1  px-5 lg:px-10 gap-5 mb-20">
            <h2 className="text-2xl text-center font-medium pt-5 border-b-2 border-red-600">Similar Recipes</h2>
        {
            moreRecipes?.map((moreRecipe, index) => (
                <MoreRecipeCard key={index} moreRecipe={moreRecipe}></MoreRecipeCard>
              
            ))
        }
      </div>
           
        </div>
    );
};

export default MoreRecipes;