import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className }) => {
  return (
    <div
      className={`bg-gray-800 text-gray-400 font-bold rounded-lg shadow-lg p-6 w-full ${className}`}
    >
      <h2 className="text-xs font-semibold mb-6 uppercase">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Card;
