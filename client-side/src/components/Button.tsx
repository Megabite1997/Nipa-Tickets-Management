import { ButtonHTMLAttributes, FC } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  type = "button",
  text = "text",
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      {...props}
      className={clsx(
        "bg-pink-600 py-1 px-8 rounded-md cursor-pointer text-white",
        {
          "hover:bg-pink-800": !props.disabled,
          "bg-slate-500 cursor-not-allowed": props.disabled,
        },
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
