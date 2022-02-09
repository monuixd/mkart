import React, { Component } from "react";
import { Formik, Field, Form } from "formik"
import ErrorMsg from './ErrorMsg';
import * as yup from 'yup';

const emailvalidation = yup.object({
    email: yup.string().required("This filed is required")
})

class StayUpdate extends Component {
    render() {
        return (
            <>
                <div className="get-in-touch-wrp">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-5 col-xs-12">
                                <h2>Stay Updated!</h2>
                                <p>Sign up for our newsletter, and get the latest from Aska Bio Tech inboxed</p>
                            </div>
                            <div className="col-md-7 col-sm-7 col-xs-12">
                                <div className="subscribe-box">
                                    <Formik
                                        validationSchema={emailvalidation}
                                        initialValues={{
                                            email: ''
                                        }}
                                        onSubmit={(values) => {
                                            console.log(values);
                                        }}
                                    >
                                        {({ }) => (
                                            <Form>
                                                <Field
                                                    name="email"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Your email address..."
                                                />
                                                <input type="submit" className="btn" value="Subscribe" />
                                                <ErrorMsg name="email" />
                                            </Form>
                                        )}

                                    </Formik>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default StayUpdate;