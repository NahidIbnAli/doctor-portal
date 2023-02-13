import React from "react";
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const Treatment = () => {
  return (
    <section className="container mx-auto hero pt-4 pb-12 px-2">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 p-5 lg:pr-24">
          <img src={treatment} className="rounded-lg" alt="" />
        </div>
        <div className="lg:w-1/2 text-accent">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Treatment;
