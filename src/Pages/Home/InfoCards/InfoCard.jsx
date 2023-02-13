import React from "react";

const InfoCard = ({ card }) => {
  const { icon, name, description, bgClass } = card;
  return (
    <div className={`card md:card-side p-5 ${bgClass}`}>
      <figure>
        <img src={icon} alt="" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
