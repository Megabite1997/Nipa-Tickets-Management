import axiosInstance from "./axiosInstance";
import { RegisterRequest, RegisterResponse } from "./types";

const registerService = async (
  data: RegisterRequest
): Promise<RegisterResponse> => {
  try {
    const response = await axiosInstance.post<RegisterResponse>(
      "/register",
      data
    );
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Register failed:", error.message);
      throw new Error("An error occurred while registering.");
    }
    throw error;
  }
};

export default registerService;
