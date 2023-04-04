import React from 'react';
import chair from "../../assets/images/chair.png";
import featuredBg from "../../assets/images/bg.png";

const Featured = () => {
     return (
          <div
          style={{
            background: `url(${featuredBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="hero md:py-36 sm:p-5">
            <div className="hero-content max-w-[1400px] p-0 flex-col lg:flex-row-reverse">
              <img
                src={chair}
                className="lg:max-w-xl md:max-w-lg sm:max-w-sm rounded-lg shadow-2xl"
                alt="featured-img"
              />
              <div className=" sm:w-2/3 m-auto">
                <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                  excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                  et a id nisi.
                </p>
                <button className="btn border-0 bg-gradient-to-r from-cyan-500 to-blue-500">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
     );
};

export default Featured;