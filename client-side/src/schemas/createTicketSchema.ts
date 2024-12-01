import * as yup from "yup";

export const createTicketSchema = yup
  .object({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    contact_information: yup
      .string()
      .required("Contact Information is required"),
  })
  .required();
