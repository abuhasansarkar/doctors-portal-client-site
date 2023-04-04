import React from "react";
import treatment from '../../assets/images/treatment.png'

const DentalCare = () => {
  return (
    <div>
      <div className="hero py-20">
        <div className="hero-content max-w-[1400px] gap-24 flex-col lg:flex-row">
          <img
            src={treatment}
            className="lg:max-w-lg max-w-xs rounded-lg shadow-2xl" alt="treatment"
          />
          <div>
            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-6">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <button className="btn border-0 bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
