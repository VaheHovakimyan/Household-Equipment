import {FC} from "react";
import './Register.scss';
import {ErrorMessage, Field, Form, Formik, useField} from "formik";
import {Link, useNavigate} from "react-router-dom";
import {registerSchema} from "../../validationSchemas/schema";
import {useRegister} from "../../hooks/useRegister";
import {RegisterInterface} from "../../interfaces/interfaces";


export const SignUpInput = ({form, ...props}: any) => {

    const [field, meta] = useField(props.field.name);

    return <div className="input_div">
        <input {...field}
               {...props}
               className={
                   meta.touched && meta.error ?
                       "register_input_error" :
                       "register_input"
               }
        />
        <ErrorMessage name={field.name} className="error_message_span" component="div"/>
    </div>
};

export const Register: FC = () => {

    const navigate = useNavigate();

    const {mutate: registration} = useRegister(navigate, "/login");

    return (
        <div className="register_div_flex">
            <div className="register_div">
                <div className="register_content">

                    <div className="register_route_div">
                        <h2 className="form_title">Register</h2>
                    </div>

                    <Formik
                        initialValues={{
                            name: "",
                            email: "",
                            password: "",
                            confirmPassword: "",
                            phone: "",
                            street: "",
                            apartment: "",
                            zip: "",
                            city: "",
                            country: ""
                        }}
                        validationSchema={registerSchema}
                        onSubmit={(values, actions) => {
                            console.log("SUBMIT");
                            console.log("VALUES", values);
                            registration(values)
                        }}
                    >
                        {() => (

                            <Form>

                                <div className="register_field_div_flex">
                                    <div className="register_field_div">

                                        <div className="register_basic_fields">

                                            <Field name="name" placeholder="Name" component={SignUpInput}/>
                                            <Field name="email" placeholder="Email" component={SignUpInput}/>
                                            <Field name="password" placeholder="Password" component={SignUpInput}/>
                                            <Field name="confirmPassword" placeholder="Confirm Password"
                                                   component={SignUpInput}/>
                                        </div>

                                        <div className="register_other_fields">

                                            <Field name="phone" placeholder="Phone number" component={SignUpInput}/>
                                            <Field name="street" placeholder="Street" component={SignUpInput}/>
                                            <Field name="apartment" placeholder="Apartment" component={SignUpInput}/>
                                            <Field name="zip" placeholder="Zip" component={SignUpInput}/>
                                            <Field name="city" placeholder="City" component={SignUpInput}/>
                                            <Field name="country" placeholder="Country" component={SignUpInput}/>
                                        </div>
                                    </div>

                                </div>

                                <div className="register_button_div">
                                    <button type="submit" className="sign_up_button">
                                        <span className="sign_text">Sign Up</span>
                                    </button>
                                </div>
                            </Form>
                        )}

                    </Formik>

                    <p className="sign_up_to_sign_in">Are you signed up? To {" "}
                        <Link to="/login" className="link">
                            <span className="sign_up_link_span">Sign In</span>
                        </Link>
                    </p>
                </div>
            </div>

        </div>
    )
}