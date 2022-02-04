import React, { Component } from "react";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            email: "",
            mobile: "",
            username: "",
            password: "",
            cPassword: "",
            address: "",
            country: "",
            state: "",
            city: "",
            pincode: "",
            response: "",
            error: ""

        }
    }

    registerHandler = (e) => {
        console.log(e.target.value.length);
        this.setState({
            [e.target.name]: e.target.value
        })

        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (this.state.fname.length === 0 || this.state.fname.length === 25) {

            this.setState({
                error: "Please enter min 3 and Max 25 character."
            })
        }
        else if (this.state.email === regex) {
            this.setState({
                error: "Please enter valid Name with alphabet."
            })
        }


    }

    // nameHandler = (e) => {
    //     console.log(e.target.value);
    //     this.setState({
    //         fname : e.target.value
    //     })
    // }


    registerSubmit = (e) => {
        e.preventDefault();
        // var userData = {
        //     "id": 20,
        //     "name": "Monu Chauhan",
        //     "username": "monu",
        //     "email": "monu.webdesigner@gmail.com",
        //     "address": {
        //       "street": "Kulas Light",
        //       "suite": "Apt. 556",
        //       "city": "Gwenborough",
        //       "zipcode": "92998-3874",
        //       "geo": {
        //         "lat": "-37.3159",
        //         "lng": "81.1496"
        //       }
        //     },
        //     "phone": "1-770-736-8031 x56442",
        //     "website": "hildegard.org",
        //     "company": {
        //       "name": "Romaguera-Crona",
        //       "catchPhrase": "Multi-layered client-server neural-net",
        //       "bs": "harness real-time e-markets"
        //     }
        //   }
        //console.log("User Data", userData);

        // axios.post("https://jsonplaceholder.typicode.com/users", {userData})
        //      .then(response => {
        //          console.log(response);
        //      })

        // on Submit validation =========

        // if(this.state.fname == "" || this.state.fname == "Ram"){
        //     // toast('🦄 Wow so easy!', {
        //     //     position: "bottom-right",
        //     //     autoClose: 5000,
        //     //     hideProgressBar: false,
        //     //     closeOnClick: true,
        //     //     pauseOnHover: true,
        //     //     draggable: true,
        //     //     progress: undefined,
        //     //     });

        //     this.setState({
        //         error : "Please enter a valid name"
        //     })
        // }



    }


    render() {

        return (
            <div className="login-box">
                <div className="heading">
                    <h2>Register</h2>
                    <p>If you don't have any account, please register here.</p>
                </div>
                <form onSubmit={this.registerSubmit}>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder=""
                                    required={true}
                                    name="fname"
                                    value={this.state.fname}
                                    onChange={this.registerHandler} />
                                {/* {(this.state.error === "")?
                                            ""
                                            : */}
                                <span className="validation">{this.state.error}</span>
                                {/* } */}

                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Eamil</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder=""
                                    required={true}
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.registerHandler} />

                                <span className="validation">{this.state.error}</span>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Mobile</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder=""
                                    required={true}
                                    name="mobile"
                                    value={this.state.mobile}
                                    onChange={this.registerHandler} />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder=""
                                    required={true}
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.registerHandler} />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter Password"
                                    required={true}
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.registerHandler} />
                                <span className="icon-field"><i className="fa fa-eye"></i></span>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter Password"
                                    required={true}
                                    name="cPassword"
                                    value={this.state.cPassword}
                                    onChange={this.registerHandler} />
                                <span className="icon-field"><i className="fa fa-eye"></i></span>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="form-group">
                                <label>Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Password"
                                    required={true}
                                    name="address"
                                    value={this.state.address}
                                    onChange={this.registerHandler} />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Country</label>
                                <select
                                    className="form-control"
                                    name="country"
                                    value={this.state.country}
                                    onChange={this.registerHandler}
                                >
                                    <option>Inida</option>
                                    <option>UK</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>State</label>
                                <select
                                    className="form-control"
                                    name="state"
                                    value={this.state.state}
                                    onChange={this.registerHandler}
                                >
                                    <option>Delhi</option>
                                    <option>UP</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>City</label>
                                <select
                                    className="form-control"
                                    name="city"
                                    value={this.state.city}
                                    onChange={this.registerHandler}
                                >
                                    <option>South Delhi</option>
                                    <option>East Delhi</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Pincode</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Password"
                                    required={true}
                                    name="pincode"
                                    value={this.state.pincode}
                                    onChange={this.registerHandler} />
                            </div>
                        </div>

                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block btn-lg">Register</button>
                    </div>
                    <div className="form-group text-center">
                        Already account,  <a href="#loginModal" data-toggle="modal" className="text-primary">Login here</a>
                    </div>


                </form>
                <ToastContainer />
            </div>
        )
    }
}

export default Register;