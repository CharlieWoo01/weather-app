import classNames from "classnames";
import { ChangeEvent } from "react";

interface SearchProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  className?: string;
}

export default function Search({ onChange, value, placeholder, className }: SearchProps) {
  return (
    <div
      className={classNames(
        "flex items-center bg-gray-800 rounded-lg p-2 shadow-md",
        className
      )}
    >
      <svg
        className="w-6 h-6 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1012 19.5a7.5 7.5 0 004.65-1.85z"
        />
      </svg>
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent w-full text-gray-400 placeholder-gray-400 focus:outline-none px-3"
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
