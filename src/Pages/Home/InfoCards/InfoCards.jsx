import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      icon: clock,
      name: "Opening Hours",
      description: "Lorem Ipsum is simply dummy text of the pri",
      bgClass: "bg-gradient-to-r from-secondary to-primary",
    },
    {
      id: 2,
      icon: marker,
      name: "Visit our location",
      description: "Brooklyn, NY 10036, United States",
      bgClass: "bg-accent",
    },
    {
      id: 3,
      icon: phone,
      name: "Contact us now",
      description: "+000 123 456789",
      bgClass: "bg-gradient-to-r from-secondary to-primary",
    },
  ];

  return (
    <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-6 pb-10">
      {cardData.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
