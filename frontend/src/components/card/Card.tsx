import React from "react";

export type CardVariant = "primary" | "secondary" | "tertiary";

interface CardProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ className = "", children, onClick }) => {
  const baseClasses = "p-5 text-black bg-stone-300 rounded-lg shadow-lg transform transition-transform duration-300 hover:transition hover:duration-300 hover:ease-in-out hover:scale-105 hover:bg-green-500 cursor-pointer";

  const cardClasses = `${baseClasses} ${className}`;

  return <div className={cardClasses} onClick={onClick}>
    {children}
  </div>;
};

export default Card;

