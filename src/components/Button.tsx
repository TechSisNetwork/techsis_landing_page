import React, { ReactElement } from 'react'
import Spinner from './icons/Spinner';

type ButtonProps = {
  type?: "submit" | "reset" | "button" | undefined;
  text: string | ReactElement;
  variant?: "primary" | "disabled"| "outlined";
  className?: string;
  onClick?: () => void;
  isLoading?: boolean;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  disabled?: boolean;
};

const ButtonVariant = {
  primary: "!w-fit text-white bg-primary hover:bg-primary/80",
  disabled: "",
  outlined: "!w-fit text-primary hover:bg-primary/5 border-primary"
};

const Button = ({ type,
  onClick,
  text,
  variant = "primary",
  isLoading,
  className = "",
  leftIcon,
  rightIcon,
  disabled, }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flex py-3 lg:py-5  px-6 items-center outline-none justify-center gap-2 w-full  rounded-[15px]  border-2 text-sm lg:text-[20px] leading-[22.7px] font-medium cursor-pointer tracking-[-0.03em] ${ButtonVariant[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {leftIcon && <>{leftIcon}</>}{" "}
      {isLoading ? <Spinner className='animate animate-spin'/> : text}{" "}
      {rightIcon && <>{rightIcon}</>}
    </button>
  )
}

export default Button
