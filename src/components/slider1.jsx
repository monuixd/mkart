import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Slider1 extends Component {

    render() {

        return (
            <>
                <Carousel autoPlay showArrows={true}>
                    <div>
                        <img src="/assets/images/slider/1.jpg" />
                    </div>
                    <div>
                        <img src="/assets/images/slider/2.jpg" />
                    </div>
                </Carousel>
            </>
        )
    }
}

export default Slider1;