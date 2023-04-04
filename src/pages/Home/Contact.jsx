import React from "react";
import contactBg from '../../assets/images/appointment.png'

const Contact = () => {
  return (
    <div className="py-20" style={{
     background: `url(${contactBg})`,
     backgroundSize: "cover",
     backgroundRepeat: "no-repeat",
     backgroundPosition: "center",
   }}>
      <div className="max-w-[1400px] m-auto text-white">
        <div className="text-center mb-5">
          <h3 className="font-bold text-cyan-500">CONTACT US</h3>
          <h2 className="text-4xl">Stay connected whith us!</h2>
        </div>
        <form className="lg:w-1/3 m-auto">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered mb-5 w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered mb-5 w-full"
          />
          <textarea
            className="textarea textarea-bordered w-full mb-4"
            placeholder="Bio"
          ></textarea>
          <button className="btn border-0 bg-gradient-to-r from-cyan-500 to-blue-500">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
