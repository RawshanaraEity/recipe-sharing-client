import { NavLink } from "react-router-dom";
import logo from '../assets/Image/4-removebg-preview.png'


const Navbar = () => {


  const navLinks = (
    <>
      <li className="text-white text-lg font-medium mr-2">
      
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-rose-600" : ""
          }
        >
          Home
        </NavLink>
      </li>

     
       <li className="text-white text-lg font-medium mr-2">
      <NavLink
        to="/recipes"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-rose-600" : ""
        }
      >
       All Recipes
      </NavLink>
      </li>  
     
      <li className="text-white text-lg font-medium mr-2">
        <NavLink
          to="/add-Recipes"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-rose-600" : ""
          }
        >
        Add Recipes
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-black w-full">
      <div className="navbar ">
        <div className="navbar-start ">
          <div className="dropdown text-white">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm bg-black dropdown-content mt-3 z-[1] p-2 shadow 
               rounded-box w-36 "
            >
              {navLinks}
            </ul>
          </div>
          <div className=" flex items-center">
            <img src={logo} className="h-20" alt="" />
           
            
          </div>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>


        <div className="navbar-end">
          {/* {user?.email ? ( */}
            <div>
            <div className="hidden md:block">
            <div className=" flex gap-2">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                  <p>photoURL</p>
                    {/* <img src={user.photoURL} alt={user.displayName} /> */}
                  </div>
                </label>
                <ul className="flex items-center gap-2">
                  <li>
                    <p className="text-xl  font-semibold">coin</p>
                  </li>
                  <li>
                    <button
                      className="btn border-none bg-rose-600 text-white"
                    //   onClick={logOut}
                    >
                      LogOut
                    </button>
                  </li>
                </ul>
              </div>
            </div>

              <div className="md:hidden">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <p>photoURL</p>
                    {/* <img src={user.photoURL} alt={user.displayName} /> */}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box"
                >
                  <li>
                  <p className="text-sm font-semibold">coin</p>
                  </li>
                  <li>
                  <button
                      className="btn border-none bg-rose-600 w-2/3 mx-auto pt-3 text-white"
                    //   onClick={logOut}
                    >
                      LogOut
                    </button>
                  </li>
                </ul>
              </div>
              </div>

            </div>
          {/* ) : ( */}
           
              <button className="btn border-none bg-rose-600 text-white ">Login</button>
           
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
