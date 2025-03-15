import React from 'react';

interface ButtonProps {
    title: string;
    id?: string;
    rightIcon?: React.ComponentType<{ className?: string }>;
    leftIcon?: React.ComponentType<{ className?: string }>;
    containerClass?: string;
}

const Button: React.FC<ButtonProps> = ({ title, id, rightIcon: RightIcon, leftIcon: LeftIcon, containerClass }) => {
    return (
        <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden 
        rounded-full px-7 py-3 text-black ${containerClass}`}>
            {LeftIcon && <LeftIcon className="mr-2" />}
            <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
                {title}
            </span>
            {RightIcon && <RightIcon className="ml-2" />}
        </button>
    );
}

export default Button;