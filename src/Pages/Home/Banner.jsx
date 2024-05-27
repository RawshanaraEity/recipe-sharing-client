
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide1 from "../../assets/Image/slider1-removebg-preview.png"
import slide2 from "../../assets/Image/slider2-removebg-preview.png"
import slide3 from "../../assets/Image/slide3.webp"

import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Banner = () => {
  const {user} = useAuth()


  const handleAlert = () => {
    Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Please login",
        showConfirmButton: false,
        timer: 1000,
      })
}

  useEffect(() => {
    Aos.init({
      duration: 2000,
      offset: 200,
    });
  }, []);

  return (
    <>
    
      <Swiper
      
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
      
          <div className="hero min-h-screen bg-rose-50">
          <SwiperSlide>
            <div className="hero-content px-5 lg:px-10 xl:px-0 2xl:max-w-screen-2xl flex-col-reverse md:flex-row-reverse">
              <div data-aos="zoom-in-left" className="pt-20 lg:w-3/6 lg:max-w-lg ">
                <img src={slide1} />
              </div>
              <div  data-aos="fade-up-right" className="lg:w-3/5 mr-auto text-center">
                <h1
                 
                  className="text-4xl lg:text-7xl text-center font-bold text-gray-900"
                >
                   Share your recipe and spread happiness
                </h1>
                <p className="py-6 text-lg font-medium text-center">
                 Learn how to make your favorite restaurant’s dishes
                </p>

                <div className="flex justify-center gap-5">
                <Link to="/recipes">
                  <button className="px-5 py-3 border-0 outline outline-rose-600 rounded-lg text-lg font-semibold bg-rose-600 hover:bg-transparent hover:text-black hover:duration-100 hover:ease-in text-white">
                   See Recipes
                  </button>
                </Link>
               {
                user? (
                  <Link to="/add-Recipes">
                  <button className="px-5 py-3 border-0 rounded-lg text-lg font-semibold hover:bg-rose-600 bg-transparent outline outline-red-600 text-black hover:duration-100 hover:ease-in hover:text-white">
                     Add Recipe
                    </button>
                  </Link>
                ) : (
                 
                  <button onClick={handleAlert} className="px-5 py-3 border-0 rounded-lg text-lg font-semibold hover:bg-rose-600 bg-transparent outline outline-red-600 text-black hover:duration-100 hover:ease-in hover:text-white">
                     Add Recipe
                    </button>
                  
                )
               }

                </div>
              </div>
              </div>
              </SwiperSlide>
          <SwiperSlide className="">
            <div className="hero-content px-5 lg:px-10 xl:px-0 2xl:max-w-screen-2xl flex-col-reverse md:flex-row-reverse">
              <div data-aos="zoom-in-left" className="pt-20 lg:w-3/6 lg:max-w-lg ">
                <img src={slide2} />
              </div>
              <div data-aos="fade-up-right" className="lg:w-3/5 mr-auto text-center">
                <h1
                
                  className="text-4xl lg:text-7xl text-center font-bold text-gray-900"
                >
                   Share your recipe and spread happiness
                </h1>
                <p className="py-6 text-lg font-medium text-center">
                It is even better than an expensive cookery book
                </p>

                <div className="flex justify-center gap-5">
                <Link to="/recipes">
                  <button className="px-5 py-3 border-0 outline outline-rose-600 rounded-lg text-lg font-semibold bg-rose-600 hover:bg-transparent hover:text-black hover:duration-100 hover:ease-in text-white">
                   See Recipes
                  </button>
                </Link>
                {
                user? (
                  <Link to="/add-Recipes">
                  <button className="px-5 py-3 border-0 rounded-lg text-lg font-semibold hover:bg-rose-600 bg-transparent outline outline-red-600 text-black hover:duration-100 hover:ease-in hover:text-white">
                     Add Recipe
                    </button>
                  </Link>
                ) : (
                 
                  <button onClick={handleAlert} className="px-5 py-3 border-0 rounded-lg text-lg font-semibold hover:bg-rose-600 bg-transparent outline outline-red-600 text-black hover:duration-100 hover:ease-in hover:text-white">
                     Add Recipe
                    </button>
                  
                )
               }

                </div>
              </div>
              </div>
              </SwiperSlide>
          <SwiperSlide className="">
            <div className="hero-content px-5 lg:px-10 xl:px-0 2xl:max-w-screen-2xl flex-col-reverse md:flex-row-reverse">
              <div data-aos="zoom-in-left" className="pt-20 lg:w-3/6 lg:max-w-lg ">
                <img src={slide3} />
              </div>
              <div data-aos="fade-up-right" className="lg:w-3/5 mr-auto text-center">
                <h1
                 
                  className="text-4xl lg:text-7xl text-center font-bold text-gray-900"
                >
                   Share your recipe and spread happiness
                </h1>
                <p className="py-6 text-lg font-medium text-center">
                 Learn how to make your favorite restaurant’s dishes
                </p>

                <div className="flex justify-center gap-5">
                <Link to="/recipes">
                  <button className="px-5 py-3 border-0 outline outline-rose-600 rounded-lg text-lg font-semibold bg-rose-600 hover:bg-transparent hover:text-black hover:duration-100 hover:ease-in text-white">
                   See Recipes
                  </button>
                </Link>
                {
                user? (
                  <Link to="/add-Recipes">
                  <button className="px-5 py-3 border-0 rounded-lg text-lg font-semibold hover:bg-rose-600 bg-transparent outline outline-red-600 text-black hover:duration-100 hover:ease-in hover:text-white">
                     Add Recipe
                    </button>
                  </Link>
                ) : (
                 
                  <button onClick={handleAlert} className="px-5 py-3 border-0 rounded-lg text-lg font-semibold hover:bg-rose-600 bg-transparent outline outline-red-600 text-black hover:duration-100 hover:ease-in hover:text-white">
                     Add Recipe
                    </button>
                  
                )
               }

                </div>
              </div>
              </div>
              </SwiperSlide>
          </div>
      </Swiper>
    </>
  );
};

export default Banner;