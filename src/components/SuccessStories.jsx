
import CountUp from 'react-countup';

// import useUsers from "../../Hooks/useUsers"; // Assuming you have a similar hook for fetching users
import useRecipes from '../Hooks/useRecipes';

const SuccessStories = () => {
    const [recipes] = useRecipes();
    // const [users] = useUsers(); // Adjust this based on your actual user fetching logic

    const recipesCount = recipes.length;
    // const usersCount = users.length;

    return (
        <div className="bg-gray-100 py-10">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-6">Success Stories</h2>
                <p className="text-lg mb-10">Join our community and explore thousands of delicious recipes shared by passionate home cooks and professional chefs.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-5 border border-gray-300 rounded-md shadow-md">
                        <h3 className="text-4xl font-bold text-indigo-600">
                            <CountUp end={recipesCount} duration={2} />
                        </h3>
                        <p className="text-xl font-medium">Recipes Available</p>
                    </div>
                    <div className="p-5 border border-gray-300 rounded-md shadow-md">
                        <h3 className="text-4xl font-bold text-indigo-600">
                            {/* <CountUp end={usersCount} duration={2} /> */}
                        </h3>
                        <p className="text-xl font-medium">Happy Users</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessStories;
