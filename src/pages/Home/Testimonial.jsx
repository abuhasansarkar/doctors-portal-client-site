import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import TestimonialReview from "./TestimonialReview";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      img: people1,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
    },
    {
      _id: 2,
      name: "Winson Herry",
      img: people2,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
    },
    {
      _id: 3,
      name: "Winson Herry",
      img: people3,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
    },
  ];

  return (
    <div className="pb-20">
      <div className="max-w-[1400px] m-auto">
        <div className="heading flex justify-between items-center ">
          <div className="left">
            <h3 className="font-bold text-cyan-500">TESTIMONIAL</h3>
            <h2 className="text-4xl">What Our Patints Says</h2>
          </div>
          <div className="right">
            <img className="w-40" src={quote} alt="quote" />
          </div>
        </div>

        <div className="lg:flex justify-between gap-10">
          {
               reviews.map(review => <TestimonialReview review={review} key={review._id}></TestimonialReview>)
          }
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
