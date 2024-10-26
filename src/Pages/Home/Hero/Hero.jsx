import React from "react";
import heroImage from "../../../assets/images/chair.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import landing from "../../../assets/images/landing-bg.png";

const Hero = () => {
  return (
    <div
      className="flex items-start lg:items-center justify-center my-8 lg:my-0 lg:min-h-screen px-2"
      style={{
        backgroundImage: `url(${landing})`,
        backgroundSize: "cover",
        backgroundPositionY: "center",
      }}
    >
      <div className="container mx-auto hero-content flex-col lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <img src={heroImage} alt="" />
        </div>
        <div className="w-full lg:w-1/2 text-accent">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-8 lg:mt-0">
            Your New Smile Starts Here
          </h1>
          <p className="mt-5 mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
