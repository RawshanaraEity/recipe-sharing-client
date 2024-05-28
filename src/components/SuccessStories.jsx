
import CountUp from 'react-countup';
import useRecipes from '../Hooks/useRecipes';
import { FaBook, FaSmile } from 'react-icons/fa';

const SuccessStories = () => {
  const [recipes] = useRecipes();
  const recipesCount = recipes.length;
  const usersCount = 120;

  return (
    <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-rose-100 py-20">
      <div className="container mx-auto text-center">
        
        {/* Success Stories Section */}
        <div className="mb-16">
          <h2 className="text-5xl font-extrabold mb-6 text-gray-900">Our Success Stories</h2>
          <p className="text-xl font-medium mb-10 text-gray-800">
            Join our thriving community and explore thousands of delicious recipes shared by passionate home cooks and professional chefs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 border border-gray-300 rounded-lg shadow-2xl bg-white transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-6xl font-bold text-rose-600 mb-4">
                <CountUp end={recipesCount} duration={5} />
              </h3>
              <p className="text-2xl font-medium text-gray-900">Recipes Available</p>
              <FaBook className="text-rose-600 text-6xl mx-auto mt-4" />
            </div>
            <div className="p-10 border border-gray-300 rounded-lg shadow-2xl bg-white transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-6xl font-bold text-rose-600 mb-4">
                <CountUp end={usersCount} duration={2} />+
              </h3>
              <p className="text-2xl font-medium text-gray-900">Happy Users</p>
              <FaSmile className="text-rose-600 text-6xl mx-auto mt-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
