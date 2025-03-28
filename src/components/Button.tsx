import React from "react";

interface ButtonProps {
  title: string;
  id?: string;
  rightIcon?: React.ReactNode; 
  leftIcon?: React.ReactNode;  
  containerClass?: string;
}

const Button: React.FC<ButtonProps> = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden 
      rounded-full px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        {title}
      </span>
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;