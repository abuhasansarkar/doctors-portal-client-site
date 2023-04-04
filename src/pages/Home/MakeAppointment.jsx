import React from "react";
import doctor from "../../assets/images/doctor-small.png";
import appointment from "../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <div className="py-20" >
      <div
        style={{
          background: `url(${appointment})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="hero text-white"
      >
        <div className="hero-content p-0 max-w-[1400px] gap-24 flex-col lg:flex-row">
          <img
            src={doctor}
            className="lg:max-w-xl max-w-xs -mt-24"
            alt="treatment"
          />
          <div >
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
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

export default MakeAppointment;
