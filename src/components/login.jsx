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
            isUsername: '',
            isPassword: '',
            type: 'password'
        }
    }

    loginHandler = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            var validUser = "monu.webdesigner@gmail.com";
            var validPassword = "webdesigner";

            if (this.state.username !== validUser) {
                this.setState({
                    isUsername: "Please enter vaild username."
                })
            } else {
                this.setState({
                    isUsername: "Great!"
                })
            }

            if (this.state.password !== validPassword) {
                this.setState({
                    isPassword: "Please enter vaild password."
                })
            } else {
                this.setState({
                    isPassword: "Great P!"
                })
            }


        })





    }

    loginSubmit = (e) => {
        const username = this.state.username;
        const password = this.state.password;
        e.preventDefault();



    }

    // showPassword = () => {

    // if(this.state.type === 'password'){
    //     this.setState({
    //         type : 'text'
    //     })
    // }else{
    //     this.setState({
    //         type : 'password'
    //     })
    // }  
    // 


    // ternary  ============
    showPassword = () => this.setState(({ type }) => ({
        type: type === 'password' ? 'text' : 'password'
    }))







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
                        <span className="validation">{this.state.isUsername}</span>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type={this.state.type}
                            className="form-control"
                            placeholder="Enter Password"
                            required={true}
                            name="password"
                            value={this.state.password}
                            onChange={this.loginHandler} />
                        <span className="icon-field" onClick={this.showPassword}><i className="fa fa-eye"></i></span>
                        <span className="validation">{this.state.isPassword}</span>

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