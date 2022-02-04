import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

class RegisterFormik extends Component {

    userDataSubmit = () => {

        let userData = {
            "id": 20,
            "name": "Monu Chauhan",
            "username": "monu",
            "email": "monu.webdesigner@gmail.com",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        }

        axios.post("https://fakestoreapi.com/users", { userData })
            .then(res => {

                console.log(res)

            })
    }

    render() {

        return (

            <>
                <div className="login-box">
                    <div className="heading">
                        <h2>Register</h2>
                        <p>If you don't have any account, please register here.</p>
                    </div>
                    <Formik initialValues={{
                        fullName: "",
                        email: "",
                        mobile: "",
                        userName: "",
                        password: "",
                        confirmPassword: "",
                        address: "",
                        country: "",
                        state: "",
                        city: "",
                        pincode: ""
                    }}

                        onSubmit={(values) => {

                            console.log(values);

                        }}

                    >

                        {({ values }) => (

                            <Form>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Full Name</label>
                                            <Field
                                                name="fullName"
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Eamil</label>
                                            <Field
                                                name="email"
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Mobile</label>
                                            <Field
                                                name="mobile"
                                                type="number"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Username</label>
                                            <Field
                                                name="userName"
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Password</label>
                                            <Field
                                                name="password"
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Confirm Password</label>
                                            <Field
                                                name="confirmPassword"
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-8">
                                        <div className="form-group">
                                            <label>Address</label>
                                            <Field
                                                name="address"
                                                as="textarea"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Country</label>
                                            <Field
                                                name="country"
                                                as="select"
                                                className="form-control"
                                            >
                                                <option value="">Select Country</option>
                                                <option value="india">India</option>
                                                <option value="uk">UK</option>
                                            </Field>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>State</label>
                                            <Field
                                                name="state"
                                                as="select"
                                                className="form-control"
                                            >
                                                <option value="">Select State</option>
                                                <option value="delhi">Delhi</option>
                                                <option value="up">UP</option>
                                            </Field>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>City</label>
                                            <Field
                                                name="city"
                                                as="select"
                                                className="form-control"
                                            >
                                                <option value="">Select City</option>
                                                <option value="newDelhi">New Delhi</option>
                                            </Field>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Pincode</label>
                                            <Field
                                                name="pincode"
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                </div>

                                <div className="form-group">
                                    {/* <button type="submit" className="btn btn-primary btn-block btn-lg">Register</button> */}
                                    <button type="submit" className="btn btn-primary btn-block btn-lg" onClick={this.userDataSubmit}>Register</button>
                                </div>
                                <div className="form-group text-center">
                                    Already account,  <a href="#loginModal" data-toggle="modal" className="text-primary">Login here</a>
                                </div>


                            </Form>

                        )}


                    </Formik>

                </div>

            </>

        )
    }
}

export default RegisterFormik;