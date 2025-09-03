
import React from "react";

const Card = ({ title, img, desc }) => {
  return (
    <div className="border rounded-lg shadow-lg p-6 bg-white hover:shadow-2xl transition-shadow duration-300">
      <img src={img} alt={title} className="rounded mb-4 w-full h-48 object-cover"/>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default Card;
