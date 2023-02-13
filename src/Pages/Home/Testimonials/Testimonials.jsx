import React from "react";
import quote from "../../../assets/icons/quote.svg";
import person from "../../../assets/images/people1.png";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      img: person,
      name: "Winson Herry",
      location: "California",
      message:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 2,
      img: person,
      name: "Winson Herry",
      location: "California",
      message:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 3,
      img: person,
      name: "Winson Herry",
      location: "California",
      message:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <section className="container mx-auto py-6 px-6">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h4 className="text-xl font-bold text-secondary">Testimonial</h4>
          <h2 className="text-3xl text-accent mt-1">What Our Patients Says</h2>
        </div>
        <img src={quote} alt="" className="w-20 lg:w-48" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {testimonialData.map((testimonial) => (
          <Testimonial
            key={testimonial.id}
            testimonial={testimonial}
          ></Testimonial>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
