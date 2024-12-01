import * as yup from "yup";

export const registerSchema = yup
  .object({
    firstName: yup
      .string()
      .required("First Name is required")
      .test(
        "is-valid-string",
        "First Name cannot contain numbers",
        (value) => !value || /^[A-Za-z\s]+$/.test(value),
      ),
    lastName: yup
      .string()
      .required("Last Name is required")
      .test(
        "is-valid-string",
        "First Name cannot contain numbers",
        (value) => !value || /^[A-Za-z\s]+$/.test(value),
      ),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();
