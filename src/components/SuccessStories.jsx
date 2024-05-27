
// import CountUp from 'react-countup';

// // import useUsers from "../../Hooks/useUsers"; // Assuming you have a similar hook for fetching users
// import useRecipes from '../Hooks/useRecipes';

// const SuccessStories = () => {
//     const [recipes] = useRecipes();
//     // const [users] = useUsers(); // Adjust this based on your actual user fetching logic

//     const recipesCount = recipes.length;
//     // const usersCount = users.length;

//     return (
//         <div className="bg-gray-100 py-10">
//             <div className="container mx-auto text-center">
//                 <h2 className="text-3xl font-semibold mb-6">Success Stories</h2>
//                 <p className="text-lg mb-10">Join our community and explore thousands of delicious recipes shared by passionate home cooks and professional chefs.</p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     <div className="p-5 border border-gray-300 rounded-md shadow-md">
//                         <h3 className="text-4xl font-bold text-indigo-600">
//                             <CountUp end={recipesCount} duration={2} />
//                         </h3>
//                         <p className="text-xl font-medium">Recipes Available</p>
//                     </div>
//                     <div className="p-5 border border-gray-300 rounded-md shadow-md">
//                         <h3 className="text-4xl font-bold text-indigo-600">
//                             {/* <CountUp end={usersCount} duration={2} /> */}
//                         </h3>
//                         <p className="text-xl font-medium">Happy Users</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SuccessStories;


import CountUp from 'react-countup';
import useRecipes from '../Hooks/useRecipes';

const SuccessStories = () => {
    const [recipes] = useRecipes();
    const recipesCount = recipes.length;
    const usersCount = 100

    return (
        <div className="bg-gray-50 py-10">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6 text-rose-600">Success Stories</h2>
                <p className="text-lg mb-10 text-gray-700">Join our community and explore thousands of delicious recipes shared by passionate home cooks and professional chefs.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 border border-gray-300 rounded-md shadow-lg bg-white transform hover:-translate-y-2 transition-transform duration-300">
                        <h3 className="text-5xl font-bold text-rose-600 mb-4">
                            <CountUp end={recipesCount} duration={5} />
                        </h3>
                        <p className="text-xl font-medium text-gray-800">Recipes Available</p>
                    </div>
                    <div className="p-8 border border-gray-300 rounded-md shadow-lg bg-white transform hover:-translate-y-2 transition-transform duration-300">
                        <h3 className="text-5xl font-bold text-rose-600 mb-4">
                            <CountUp end={usersCount} duration={5} />+
                        </h3>
                        <p className="text-xl font-medium text-gray-800">Happy Users</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessStories;

