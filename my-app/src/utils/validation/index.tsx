import * as Yup from "yup";

export const infoSchema = Yup.object({
  firstname: Yup.string().required("First name is required"),

  lastname: Yup.string()
    .required("Last name is required")
    .test("not-same", "First and last name cannot be same", function (value) {
      return value !== this.parent.firstname;
    }),

  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),

  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
});

export const addressSchema = Yup.object({
  street: Yup.string().required("Street name is Required"),
  city: Yup.string().required("City name is Required"),
  state: Yup.string().required("State name is Required"),
  zipCode: Yup.number().required("Zip code is Required"),
});
