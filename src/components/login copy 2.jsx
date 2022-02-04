import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends React.Component {
    // https://jsonplaceholder.typicode.com/users

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isValid: '',
            isNotValid: '',


        }
    }

    loginHandler = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })

        var validUser = "monu.webdesigner@gmail.com";
        var validPassword = "webdesigner";

        if (this.state.username !== validUser) {
            this.setState({
                isNotValid: "Please enter vaild username."

            })
        } else {
            this.setState({
                isNotValid: "Great!"
            })
        }
        // else if(this.state.password !== validPassword){
        //     this.setState({
        //         isValid : "Please enter vaild password."
        //     })
        // }
        // else if(this.state.password === validPassword){
        //     this.setState({
        //         isValid : "Great!"
        //     })
        // }


    }

    loginSubmit = (e) => {
        const username = this.state.username;
        const password = this.state.password;
        e.preventDefault();

        var validUser = "monu.webdesigner@gmail.com";
        var validPassword = "webdesigner";

        if (this.state.username === validUser && this.state.password === validPassword) {

            toast.success('Successfully login', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        }

        else if (this.state.username !== validUser && this.state.password !== validPassword) {

            toast.error('Username and password is wrong!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        }


    }

    showPassword = (e) => {
        console.log(e);
        alert(e);

        if (e.password.target.type === "password") {
            this.setState({
                [e.password.target.type]: "text"
            })
        }
        else if (e.password.target.type === "text") {
            this.setState({
                [e.password.target.type]: "password"
            })
        }
    }


    render() {
        return (

            <div className="login-box">
                <ToastContainer />
                <div>{this.state.username.value}</div>
                <div className="heading">
                    <h2>Login</h2>
                    <p>If you are already registered, please log in.</p>
                </div>

                <form onSubmit={this.loginSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Username"
                            required={true}
                            name="username"
                            value={this.state.username}
                            onChange={this.loginHandler}
                            autoComplete="off"
                        />
                        <span className="validation">{this.state.isNotValid}</span>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter Password"
                            required={true}
                            name="password"
                            value={this.state.password}
                            onChange={this.loginHandler} />
                        <span className="icon-field" onClick={this.showPassword}><i className="fa fa-eye"></i></span>
                        <span className="validation">{this.state.isNotValid}</span>
                        <span className="validation">{this.state.isValid}</span>
                    </div>
                    <div className="form-group">
                        <button
                            type="submit"
                            className="btn btn-primary btn-block btn-lg"
                        >Login</button>
                    </div>
                    <div className="form-group text-center">
                        <a href="#" className="text-primary">Forgot password?</a>
                        <hr />
                    </div>
                    <div className="form-group text-center">
                        Don't have any Account
                        <a href="#registerModal" data-toggle="modal" className="text-primary"> Register here</a>
                    </div>


                </form>
            </div>
        )
    }
}

export default Login;