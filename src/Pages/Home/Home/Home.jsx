import React from "react";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import Treatment from "../Treatment/Treatment";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <InfoCards></InfoCards>
      <Services></Services>
      <Treatment></Treatment>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </div>
  );
};

export default Home;
