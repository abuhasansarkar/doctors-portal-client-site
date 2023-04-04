import React from "react";

import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const ServicesCard = () => {
  const servicesData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: whitening,
    },
  ];
  return (
    <div className="max-w-[1400px] mx-auto py-20">
      <div className="text-center">
        <h3 className="text-cyan-500 font-bold">OUR SERVICES</h3>
        <h2 className="text-4xl">Services We Provide</h2>
      </div>
      <div className="lg:flex justify-between gap-10">
        {servicesData.map((serviceCard) => (
          <ServiceCard
            serviceCard={serviceCard}
            key={serviceCard.id}
          ></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
