import React, { Component } from "react";
import axios from "axios";

class Login extends React.Component {
    // https://jsonplaceholder.typicode.com/users

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            userInfo: []

        }
    }

    loginHandler = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    loginSubmit = (e) => {
        const username = this.state.username;
        const password = this.state.password;
        e.preventDefault();

        var userData = {
            'name': username,
            'password': password
        }

        //alert(`Username : ${username}  Password : ${password} `);

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

        //   axios.post("https://jsonplaceholder.typicode.com/users", {userData})
        //     .then(response => {
        //         console.log(response);
        //         // if(response.status == 201){
        //         //     alert("Login Successfully");
        //         // }
        //     })

        // axios.get("https://jsonplaceholder.typicode.com/users")
        // .then(res =>{
        //     console.log(res);
        //     if(res.status == 200){
        //         //alert("Login Successfully");

        //         this.setState({
        //             userInfo : res.data
        //         })
        //     }
        // })




    }
    render() {
        console.log("userInfo", this.state.userInfo);
        var userInfoData = this.state.userInfo;
        return (

            <div className="login-box">
                <div>{userInfoData.map((item, i) => {
                    return (
                        <div key={i}>{item.username}</div>
                    )
                })}</div>
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
                            onChange={this.loginHandler} />
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
                        <span className="icon-field"><i className="fa fa-eye"></i></span>
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