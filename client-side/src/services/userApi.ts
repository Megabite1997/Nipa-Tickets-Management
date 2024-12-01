import axiosInstance from "./axiosInstance";

export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const response = await axiosInstance.post(`/user/login`, data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Login failed:", error.message);
      throw new Error("Failed to log in. Please try again.");
    }
    throw error;
  }
};
