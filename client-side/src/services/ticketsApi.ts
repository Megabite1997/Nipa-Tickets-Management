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

export const updateTicket = async (
  id: string,
  updatedData: Record<string, any>,
) => {
  try {
    const response = await axiosInstance.put(`api/tickets/${id}`, updatedData);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Update failed:", error.message);
      throw new Error("Error updating ticket. Please try again.");
    }
    throw error;
  }
};
