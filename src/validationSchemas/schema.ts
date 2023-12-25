import * as yup from "yup";

const PASSWORD_REGEXP: RegExp = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{8,}$/;

export const registerSchema: any = yup.object().shape({
    name: yup
        .string()
        .min(2)
        .required("Please enter your name."),
    email: yup
        .string()
        .email("Please enter a valid mail.")
        .required(),
    password: yup
        .string()
        .min(8)
        .matches(
            PASSWORD_REGEXP,
            {message: "Please create a password with uppercase letter, number and symbols."}
        )
        .required("Required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Password must match")
        .required("Required"),
    phone: yup
        .number()
        .required(),
    street: yup
        .string()
        .min(3)
        .required(),
    apartment: yup
        .string()
        .min(2)
        .required(),
    zip: yup
        .string()
        .min(3)
        .required(),
    city: yup
        .string()
        .required(),
    country: yup
        .string()
        .required(),
});

export const loginSchema: any = yup.object().shape({
    email: yup
        .string()
        .email("Please enter a valid mail.")
        .required(),
    password: yup
        .string()
        .min(8)
        .matches(
            PASSWORD_REGEXP,
            {message: "Please create a password with uppercase letter, number and symbols."}
        )
        .required("Required"),
});