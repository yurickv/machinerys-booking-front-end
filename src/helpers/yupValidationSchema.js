import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().min(5).max(25).required("Required"),
  type: Yup.string()
    .min(5)
    .max(25)
    .matches(/^[a-zA-Z\s'-]+$/, "Invalid characters, only latin letters")
    .required("Required"),
  contact: Yup.string()
    .min(3)
    .max(25)
    .matches(/^[a-zA-Z\s'-]+$/, "Invalid characters, only latin letters")
    .required("Required"),
  location: Yup.string().required("Required"),
  price: Yup.number()
    .typeError("Price must be a number")
    .min(100, "Minimum price is 100")
    .max(2000, "Maximum price is 2000")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{7,10}$/, "Phone number must be 7 to 10 digits")
    .required("Phone number is required"),
  description: Yup.string().min(5).max(250).required("Required"),
});
