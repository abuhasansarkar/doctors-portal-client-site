import React from "react";

const TestimonialReview = ({ review }) => {
  return (
    <div className="card shadow-xl m-5">
      <div className="card-body">
        <p>{review.review}</p>
        <div className="card-actions items-center mt-3">
          <img className="avatar ring rounded-full w-16" src={review.img} alt="img" />
          <div className="info">
               <h4 className="font-bold">{review.name}</h4>
               <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialReview;
