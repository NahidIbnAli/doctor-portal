import React from "react";

const Testimonial = ({ testimonial }) => {
  const { img, name, location, message } = testimonial;
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <p>{message}</p>
        <div className="flex items-center gap-5 mt-7">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold">{name}</h4>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
