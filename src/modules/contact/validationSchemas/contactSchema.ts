import * as Yup from "yup";

export const requiredMessage = "This field is required";
export const wrongEmailFormatMessage = "Please enter a valid email";

export const contactSchema = Yup.object().shape({
  email: Yup.string().email(wrongEmailFormatMessage).required(requiredMessage),
  message: Yup.string().required(requiredMessage),
});
