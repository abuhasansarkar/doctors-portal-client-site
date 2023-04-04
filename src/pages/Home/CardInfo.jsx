import React from "react";

const CardInfo = ({ card }) => {
  return (
    <div className="card bg-gradient-to-r from-cyan-500 to-blue-500 lg:w-1/3 m-3 card-side shadow-xl p-6">
      <figure>
        <img
          src={card.icon}
          alt="Movie"
        />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{card.name}</h2>
        <p>{card.description}</p>
        
      </div>
    </div>
  );
};

export default CardInfo;
