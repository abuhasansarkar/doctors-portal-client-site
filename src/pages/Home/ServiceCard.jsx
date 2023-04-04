import React from "react";

const ServiceCard = ({ serviceCard }) => {
  return (
    <div className="card bg-base-100 my-5 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={serviceCard.img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{serviceCard.name}</h2>
        <p>{serviceCard.description}</p>
        
      </div>
    </div>
  );
};

export default ServiceCard;
