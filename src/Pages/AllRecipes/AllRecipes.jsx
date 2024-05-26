import useRecipes from "../../Hooks/useRecipes";
import bannerImg from "../../assets/Image/image 19.jpg"
import RecipeCard from "./RecipeCard";


const AllRecipes = () => {
    const [recipes] = useRecipes()
  
    // console.log(AllRecipes);
    return (
        <div>
            <div className="">
                <img src={bannerImg} className="h-[300px] w-full" alt="" />
            </div>
           
            <div className="grid grid-cols-1  px-5 lg:px-10 gap-5 mb-20">
        {
            recipes?.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe}></RecipeCard>
            ))
        }
      </div>
           
        </div>
    );
};

export default AllRecipes;