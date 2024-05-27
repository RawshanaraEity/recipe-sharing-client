import { useState } from "react";
import useRecipes from "../../Hooks/useRecipes";
import bannerImg from "../../assets/Image/image 19.jpg"
import RecipeCard from "./RecipeCard";

const AllRecipes = () => {
    const [recipes] = useRecipes();
    const [category, setCategory] = useState('');
    const [country, setCountry] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    

    // Filter and search
    const filteredRecipes = recipes.filter(recipe => {
        const matchesCategory = category ? recipe.category === category : true;
        const matchesCountry = country ? recipe.country === country : true;
        const matchesSearch = searchQuery ? recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) : true;
        return matchesCategory && matchesCountry && matchesSearch;
    });

    return (
        <div>
            <div className="">
                <img src={bannerImg} className="h-[300px] w-full" alt="" />
            </div>

            <div className="grid grid-cols-3 gap-28 px-5 lg:px-10 my-10">
                <div className="mb-4">
                    <label htmlFor="search" className="block text-sm font-medium text-gray-700">
                        Search by Recipe Title
                    </label>
                    <input
                        type="text"
                        id="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                        Filter by Category
                    </label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                    >
                        <option value="">All Categories</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Rice">Rice</option>
                        <option value="Seafood">Seafood</option>
                        <option value="Chicken">Chicken</option>
                        <option value="Fried">Fried</option>
                        <option value="Curry">Curry</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Dessert">Dessert</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Filter by Country
                    </label>
                    <select
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                    >
                        <option value="">All Countries</option>
                        <option value="Italy">Italy</option>
                        <option value="China">China</option>
                        <option value="Japan">Japan</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 px-5 lg:px-10 gap-5 mb-20">
                {filteredRecipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe}></RecipeCard>
                ))}
            </div>
        </div>
    );
};

export default AllRecipes;
