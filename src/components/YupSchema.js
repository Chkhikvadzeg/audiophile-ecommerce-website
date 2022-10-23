import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
  Name: yup
    .string("Enter your name")
    .required("Name is required"),
  Email: yup
    .string("Enter your email")
    .email("Please enter a valid email address")
    .required("Email is required"),
  "Phone Number": yup
    .number()
    .required("Phone number is required")
    .typeError("Please enter a valid phone number"),
  address: yup
    .string("Enter your address")
    .required("Address is required"),
  "ZIP Code": yup
    .number("Enter your ZIP Code")
    .required("ZIP Code is required")
    .typeError("Please enter a valid ZIP Code"),
  City: yup
    .string("Enter your city")
    .required("City is required"),
  Country: yup
    .string("Enter your country")
    .required("Country is required"),
  "e-Money Number": yup
    .number("Enter your e-Money Number")
    .typeError("Please enter a valid e-Money Number"),
  "e-Money PIN": yup
    .number("Enter your e-Money PIN")
    .typeError("Please enter a valid e-Money PIN"),
}).required();

const resolver = yupResolver(schema);

export default resolver;