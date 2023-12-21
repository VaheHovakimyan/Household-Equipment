import {FC} from "react";
import './Login.scss';
import {loginSchema} from "../../validationSchemas/schema";
import {Field, Form, Formik} from "formik";
import {SignUpInput} from "../register/Register";
import {useNavigate} from "react-router-dom";


export const Login: FC = () => {

    const navigate = useNavigate();

    return (
        <div className="login_div_flex">
            <div className="login_div">

                <div className="login_route_div">
                    <h2 className="form_title">Sign In</h2>
                </div>

                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={loginSchema}
                    onSubmit={(values, actions) => {
                        console.log("SUBMIT");
                        console.log("VALUES", values);
                        navigate('/');
                    }}
                >
                    {() => (

                        <Form>

                            <div className="login_field_div_flex">
                                <div className="login_field_div">

                                    <div className="login_basic_fields">

                                        <Field name="email" placeholder="Email" component={SignUpInput}/>
                                        <Field name="password" placeholder="Password" component={SignUpInput}/>

                                    </div>

                                </div>

                            </div>

                            <div className="login_button_div">
                                <button type="submit" className="login_button">
                                    <span className="sign_text">Sign In</span>
                                </button>
                            </div>

                        </Form>
                    )}

                </Formik>
            </div>
        </div>
    )
}