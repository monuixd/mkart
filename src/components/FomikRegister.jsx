import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import ErrorMsg from './ErrorMsg';
import * as yup from 'yup';

const validationSchema = yup.object({
    name: yup.string().required("This filed is required")
})

class Signup extends Component {
    render() {
        return (
            <>
                <Formik
                    validationSchema={validationSchema}
                    initialValues={{
                        name: '',
                        mobile: '',
                        email: '',
                        password: '',
                        gender: '',
                        date: '',
                        age: '',
                        comment: ''

                    }} onSubmit={(values) => {
                        console.log(values)
                    }}>

                    {({ values }) => (

                        <Form>

                            <label>Name</label>
                            <Field name="name" type="text" /><br /><br />
                            <ErrorMsg name="name" />

                            <label>Mobile</label>
                            <Field name="mobile" type="text" /><br /><br />

                            <label>Email</label>
                            <Field name="email" type="text" /><br /><br />

                            <label>Gender</label><br />
                            <label>Male</label>
                            <Field name="gender" type="radio" value="Male"></Field>
                            <label>Female</label>
                            <Field name="gender" type="radio" value="Female"></Field><br /><br />

                            <label>Age</label>
                            <Field name="age" as="select">
                                <option value="20">20</option>
                                <option value="30">30</option>
                            </Field><br /><br />

                            <label>Email</label>
                            <Field name="comment" as="textarea" /><br /><br />

                            <button type='submit'>Submit</button>

                        </Form>

                    )}
                </Formik>
            </>
        )
    }
}

export default Signup;