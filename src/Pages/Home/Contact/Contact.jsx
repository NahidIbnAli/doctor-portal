import React from "react";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const Contact = () => {
  return (
    <section
      className="mt-12 py-12"
      style={{
        backgroundImage: `url(${appointment})`,
        backgroundSize: "cover",
        backgroundPositionY: "center",
      }}
    >
      <div className="text-center">
        <h5 className="text-xl text-secondary font-bold">Contact Us</h5>
        <h3 className="text-4xl text-white mt-1">Stay connected with us</h3>
      </div>
      <div className="pt-10 px-6 lg:px-0 lg:w-1/4 mx-auto">
        <form className="text-center">
          <input
            type="email"
            placeholder="Email Address"
            className="input w-full"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input w-full my-5"
          />
          <textarea
            className="textarea textarea-bordered w-full mb-8"
            placeholder="Your Message"
            rows={4}
          ></textarea>
          <PrimaryButton>Submit</PrimaryButton>
        </form>
      </div>
    </section>
  );
};

export default Contact;
