import React, { Component } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
class Promotion extends Component {

  render() {
    return (
      <>
        <div className="permotion-wrp">
          <div className="container">
            <Carousel responsive={responsive}>
              <div><img src="./assets/images/permotions/1.jpg" alt="" /></div>
              <div><img src="./assets/images/permotions/2.jpg" alt="" /></div>
              <div><img src="./assets/images/permotions/3.jpg" alt="" /></div>
              <div><img src="./assets/images/permotions/4.jpg" alt="" /></div>
              <div><img src="./assets/images/permotions/5.jpg" alt="" /></div>
            </Carousel>
          </div>
        </div>
      </>
    )
  }
}

export default Promotion;