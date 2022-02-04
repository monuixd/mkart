import React, { Component } from "react";

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
                                    <form >
                                        <input className="form-control" type="email" placeholder="Your email address..." />
                                        <input type="button" className="btn" value="Subscribe" />
                                    </form>
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