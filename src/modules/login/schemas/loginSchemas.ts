import * as Yup from "yup";

export const requiredMessage = "This field is required";
export const wrongEmailFormatMessage = "Please enter a valid email";

export const loginSchema = Yup.object().shape({
  email: Yup.string().required(requiredMessage).email("email format is incorrect"),
  password: Yup.string().required(requiredMessage),
});
