import { NavLink } from "react-router-dom";
import logo from "../assets/Image/4-removebg-preview.png";
import SocialLogin from "../components/socialLogin/SocialLogin";
import useAuth from "../Hooks/useAuth";
import { BsCoin } from "react-icons/bs";
import { MdOutlineStars } from "react-icons/md";
import useGetUsers from "../Hooks/useGetUsers";
import Swal from "sweetalert2";

const Navbar = () => {
  const { logOut, user } = useAuth();
  const [singleUser] = useGetUsers();

  const handleAlert = () => {

    Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Please login",
        showConfirmButton: false,
        timer: 1000,
      })
}

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

     {
      user? (
        <>
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
        <li className="text-white text-lg font-medium mr-2">
        <NavLink
          to="/coin"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-rose-600" : ""
          }
        >
          Purchase Coin
        </NavLink>
      </li>
      </>
      ) : (
        <li className="text-white text-lg font-medium mr-2">
        <NavLink
         onClick={handleAlert}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-rose-600" : ""
          }
        >
          Add Recipes
        </NavLink>
      </li>
      )
     }
    
     
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
              className="menu menu-sm z-10 bg-black dropdown-content mt-3 p-2 shadow rounded-b-lg w-32 "
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex items-center">
            <img src={logo} className="h-14 md:h-20" alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          {user?.email ? (
            <div>
              <div className="hidden md:block">
                <div className="flex items-center gap-2">
                  {/* <p className="text-xl text-white  font-semibold"><BsCoin className="text-white bg-yellow-600 rounded-full text-4xl" /></p> */}
                  <p className="text-xlfont-semibold flex items-center gap-1">
                  
                    <MdOutlineStars className="bg-white text-yellow-600 rounded-full text-xl"/>
                    <span className="text-white text-lg font-bold">{singleUser.coin} coin </span>
                  </p>

                  <ul className="flex items-center gap-5">
                    <li>
                      <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <img src={user.photoURL} alt={user.displayName} />
                        </div>
                      </label>
                    </li>
                    <li>
                      <button
                        className="btn border-none bg-rose-600 text-white"
                        onClick={logOut}
                      >
                        LogOut
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:hidden">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} alt={user.displayName} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box"
                  >
                    <li>
                    <MdOutlineStars className="bg-white text-yellow-600 rounded-full text-xl"/>
                    <span className="text-white text-lg font-bold">{singleUser.coin} coin </span>
                    </li>
                    <li>
                      <button
                        className="btn border-none bg-rose-600 w-2/3 mx-auto pt-3 text-white"
                        onClick={logOut}
                      >
                        LogOut
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <SocialLogin />
          )}
          ;
        </div>
      </div>
    </div>
  );
};

export default Navbar;
