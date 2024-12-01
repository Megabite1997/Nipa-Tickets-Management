import axiosInstance from "./axiosInstance";

export const createTicket = async (data: {
  title: string;
  description: string;
  contact_information: string;
}) => {
  try {
    const response = await axiosInstance.post(`api/tickets`, data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Login failed:", error.message);
      throw new Error("Failed to log in. Please try again.");
    }
    throw error;
  }
};
export const getTickets = async (params: Record<string, any> = {}) => {
  try {
    const response = await axiosInstance.get(`api/tickets`, { params });
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Login failed:", error.message);
      throw new Error("Failed to log in. Please try again.");
    }
    throw error;
  }
};
