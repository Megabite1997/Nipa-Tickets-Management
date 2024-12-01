import { FC, lazy, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

import CircularProgress from "@mui/material/CircularProgress";

import InputField from "../../components/InputField";
import { createTicketSchema } from "../../schemas/createTicketSchema";
import { createTicket } from "../../services/ticketsApi";
import BoxError from "../../components/BoxError";
import Button from "../../components/Button";
import TextArea from "../../components/TextArea";
import successAnimation from "../../assets/nipa/successAnimation.json";

const Player = lazy(() =>
  import("@lottiefiles/react-lottie-player").then((module) => ({
    default: module.Player,
  })),
);

const CreateTicket: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createTicketSchema),
  });

  const [error, setError] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const createTicketHandler = async (data: {
    title: string;
    description: string;
    contact_information: string;
  }) => {
    try {
      setIsLoading(true);

      const trimmedData = {
        title: data.title.trim(),
        description: data.description.trim(),
        contact_information: data.contact_information.trim(),
      };

      await createTicket(trimmedData);
      setIsSuccess(true);
      reset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError("Invalid login or password.");
      } else {
        console.error("Unknown error: ", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitForm = handleSubmit(createTicketHandler, (error) => {
    console.error("Validation error: ", error);
  });

  return (
    <div className="mt-32 flex flex-col justify-center max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-center">Create a Ticket</h1>

      <form
        onSubmit={handleSubmitForm}
        className="flex flex-col gap-8 mt-10 mb-32"
      >
        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <CircularProgress />
          </div>
        )}
        {isSuccess && (
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <Player
              autoplay
              loop={false}
              src={successAnimation}
              style={{ height: "200px", width: "200px" }}
              onEvent={(event) => {
                if (event === "complete") setIsSuccess(false); // Hide after animation
              }}
            />
          </div>
        )}
        {error && <BoxError className="mb-6" errorMessage={error} />}
        <InputField
          label="Title"
          name="title"
          type="text"
          register={register}
          setValue={setValue}
          error={errors.title}
        />

        <TextArea
          label="Description"
          name="description"
          register={register}
          setValue={setValue}
          error={errors.description}
        />

        <TextArea
          label="Contact Information"
          name="contact_information"
          register={register}
          setValue={setValue}
          error={errors.contact_information}
        />

        <Button
          type="submit"
          text="Submit"
          disabled={isLoading}
          className="py-2 my-4"
        />
      </form>
    </div>
  );
};

export default CreateTicket;
