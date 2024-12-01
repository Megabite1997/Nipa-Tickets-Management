import { FC } from "react";
import { FaExclamationCircle } from "react-icons/fa";

interface BoxErrorProps {
  errorMessage: string | undefined;
  className?: string;
}

const BoxError: FC<BoxErrorProps> = ({ errorMessage, className }) => {
  return (
    <div
      className={`flex items-center bg-red-200 border border-red-500 py-4 px-6 ${className}`}
    >
      <FaExclamationCircle className="mr-2" color="tomato" />
      {errorMessage}
    </div>
  );
};

export default BoxError;
