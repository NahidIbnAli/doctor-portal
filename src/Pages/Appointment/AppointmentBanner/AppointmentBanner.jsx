import React from "react";
import landing from "../../../assets/images/landing-bg.png";
import heroImage from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <section
      className="flex items-start lg:items-center justify-center my-8 lg:my-0 lg:min-h-screen"
      style={{
        backgroundImage: `url(${landing})`,
        backgroundSize: "cover",
        backgroundPositionY: "center",
      }}
    >
      <div className="container mx-auto hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-20">
        <div className="w-full hidden lg:block lg:w-1/2">
          <img src={heroImage} alt="" />
        </div>
        <div className="w-auto text-accent">
          <DayPicker
            mode="single"
            required
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="shadow-xl w-auto p-5 rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
