import React, { Component } from "react";

class Slider extends Component {

    render() {

        return (
            <>
                <section className="hero-slider-wrp">
                    <ul className="hero-slider">
                        <li><img src="/assets/images/slider-images/1.jpg" alt="" title="" />
                            <div className="caption">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                            <div className="dscb-slider-product">
                                                <h2>Smart management of cities </h2>
                                                <p>Check in on crime & maintain order </p>
                                                <a href="#" className="btn">Click here</a> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><img src="/assets/images/slider-images/1.jpg" alt="" title="" />
                            <div className="caption">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                            <div className="dscb-slider-product">
                                                <h2>Reliability and Compliance</h2>
                                                <p>Scalable solutions for safeguarding your valuables </p>
                                                <a href="#" className="btn">Click here</a> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                </section>
            </>
        )
    }
}

export default Slider;