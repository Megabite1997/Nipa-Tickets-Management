import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";

import ImageNipaAuthen from "../assets/nipa/nipa_background.webp";
import ImageNipaAuthen2 from "../assets/nipa/nipa_background2.webp";

import InputField from "../components/InputField";
import { loginSchema } from "../schemas/loginSchema";
import { useAuth } from "../store/auth-context";
import { loginUser } from "../services/authApi";
import BoxError from "../components/BoxError";
import Button from "../components/Button";

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>("");

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const loginHandler = async (data: { email: string; password: string }) => {
    try {
      const responseData = await loginUser(data);
      login(responseData.token);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError("Invalid login or password.");
      } else {
        console.error("Unknown error: ", error);
      }
    }
  };

  const handleSubmitForm = handleSubmit(loginHandler, (error) => {
    console.error("Validation error: ", error);
  });

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="grid md:grid-cols-2">
        <div className="bg-white pt-32 md:pt-40 px-4 md:px-28 pb-10">
          <div className="mb-10">
            <h1 className="font-bold text-4xl mb-2">Welcome back</h1>
            <p className="ml-1">Please enter your details</p>
          </div>
          {error && <BoxError className="mb-6" errorMessage={error} />}
          <h1 className="text-2xl">Log In</h1>
          <div className="mt-8 mx-2">
            <div>
              <InputField
                register={register}
                name="email"
                type="text"
                label="Email"
                placeholder="Email"
                maxLength={30}
                error={errors.email}
              />
            </div>
          </div>
          <div className="mt-8 mx-2 relative">
            <InputField
              register={register}
              name="password"
              type={showPassword ? "text" : "password"}
              label="Password"
              placeholder="Password"
              maxLength={30}
              error={errors.password}
            />
            <button
              type="button"
              className="absolute top-11 right-3"
              onClick={showPasswordHandler}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
          <div className="mx-2 text-right mt-4 mr-4">
            <Link
              className="hover:underline text-pink-500"
              to="/forget-password"
            >
              Forget password?
            </Link>
          </div>
          <div className="text-center">
            <Button type="submit" text="Login" className="mt-10" />
          </div>
          <div>
            <p className="text-center mt-8">
              Don't have an account?
              <Link
                className="text-pink-500 hover:underline ml-1"
                to="/register"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
        <div
          className={`md:pt-32 animate-fade-in bg-[url('${ImageNipaAuthen2}')]`}
        >
          <img src={ImageNipaAuthen} alt="Shiba sits" className="h-5/6" />
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
