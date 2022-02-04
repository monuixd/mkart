import React, { Component } from 'react';

class Breadcrumb extends Component {
    render() {
        return (
            <>
                <div className="breadcrumb-wrp">
                    <div className="container">
                        <h3>About Us</h3>
                        <ul className="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li className="active">About Us</li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Breadcrumb;