import * as Yup from "yup";

const Schemas = {
  loginSchema: Yup.object().shape({
    email: Yup.string().required("Required").min(5).max(10),
    password: Yup.string().required("Required").min(5).max(10),
  }),
  registerSchema: Yup.object().shape({
    name: Yup.string().required("Required").min(5).max(10),
    email: Yup.string().required("Required").min(5).max(10),
    password: Yup.string().required("Required").min(5).max(10),
  }),
  productMessageSchema: Yup.object().shape({
    message: Yup.string().required().max(100),
  }),
  productSchema: Yup.object().shape({
    imgUrls: Yup.array().min(1),
    title: Yup.string().required().min(5).max(20),
    price: Yup.number().required().min(1).max(100000),
    description: Yup.string().max(500),
  }),
};

export default Schemas;
