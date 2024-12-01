import React from "react";
import Navbar from "../components/Navbar";
import ImageShibaDoubt from "../assets/shiba/shiba-doubt.jpeg";

const ErrorPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-2xl">Page is not found !</p>
        <img src={ImageShibaDoubt} alt="shiba-doubt" />
      </div>
    </div>
  );
};

export default ErrorPage;
