
import { Link } from "react-router-dom";

const PurchaseCoin = () => {
  const coinPackages = [
    { coins: 100, price: 1, color: 'bg-sky-600', title: 'Starter Pack', description: 'Perfect for trying out our service.', features: ['Basic support', 'Access to basic features', '10 recipe views'] },
    { coins: 500, price: 5, color: 'bg-green-600', title: 'Value Pack', description: 'Best for regular users.', features: ['Priority support', 'Access to premium features', '50 recipe views'] },
    { coins: 1000, price: 10, color: 'bg-amber-600', title: 'Pro Pack', description: 'Ideal for power users.', features: ['24/7 support', 'Access to all features', 'Unlimited recipe views'] }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h2 className="text-4xl text-center text-gray-800 font-bold pt-10">Purchase Coin</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-5 w-full max-w-7xl">
        {coinPackages.map((pkg, index) => (
          <div key={index} className="card bg-white shadow-xl rounded-lg overflow-hidden transform transition hover:scale-105">
            <div className={`${pkg.color} p-6 text-center text-white`}>
              <p className="text-3xl font-bold">${pkg.price}</p>
              <p className="text-lg mt-2">{pkg.coins} Coins</p>
            </div>
            <div className="card-body p-6">
              <h3 className="text-center text-2xl font-semibold mb-4">{pkg.title}</h3>
              <p className="text-center text-gray-600 mb-4">{pkg.description}</p>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <Link to={`/payment?coins=${pkg.coins}&price=${pkg.price}`}>
                <button className="btn w-full bg-rose-600 outline outline-rose-600 border-0 py-2 rounded-md hover:bg-transparent hover:text-black hover:duration-100 hover:ease-in text-white">Purchase</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchaseCoin;
