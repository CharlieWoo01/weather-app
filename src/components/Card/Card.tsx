import classNames from "classnames";
import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Card({ title, children, className }: CardProps) {
  const cardClasses = classNames(
    "bg-gray-800 text-gray-400 font-bold rounded-lg shadow-lg p-6",
    className
  );

  return (
    <div className={cardClasses}>
      <h2 className="text-xs font-semibold mb-6 uppercase">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
