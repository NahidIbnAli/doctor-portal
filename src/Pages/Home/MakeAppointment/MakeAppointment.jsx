import React from "react";
import doctor from "../../../assets/images/doctor-small.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import appointment from "../../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section
      className="hero px-2 mt-6 mb-12"
      style={{
        backgroundImage: `url(${appointment})`,
        backgroundSize: "cover",
        backgroundPositionY: "center",
      }}
    >
      <div className="container mx-auto hero-content flex-col lg:flex-row lg:pb-0">
        <div className="lg:w-1/2 lg:pr-24 hidden lg:block">
          <img src={doctor} className="-mt-24" alt="" />
        </div>
        <div className="lg:w-1/2 py-14 lg:py-0">
          <h4 className="text-xl font-bold text-secondary mb-4">Appointment</h4>
          <h2 className="text-5xl font-semibold text-white">
            Make an appointment Today
          </h2>
          <p className="py-6 text-white">
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

export default MakeAppointment;
