import React from "react";

export type CardVariant = "primary" | "secondary" | "tertiary";

interface CardProps {
  title: string;
  content: string;
  variant?: CardVariant;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, content, variant, className = "" }) => {
  const baseClasses = "p-4 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105";

  const variantClasses: Record<CardVariant, string> = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-red-500 text-white",
    tertiary: "bg-yellow-500 text-black",
  };

  const appliedVariant = variant ? variantClasses[variant] : "";

  const cardClasses = `${baseClasses} ${appliedVariant} ${className}`;

  return (
    <div className={cardClasses}>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-sm">{content}</p>
    </div>
  );
};

export default Card;

