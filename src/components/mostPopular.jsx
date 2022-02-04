import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import axios from 'axios';
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
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


class MostPopular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostPopular: []
        }
    }


    componentDidMount() {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                //console.log(response.data)

                this.setState({
                    mostPopular: response.data
                })
            })
    }

    render() {

        const mostPopularListFinal = this.state.mostPopular;

        return (
            <>
                <div className="most-popular-wrp">
                    <div className="container">
                        <div className="heading">
                            <h2>Most <span>Popular</span></h2>
                        </div>
                        <div className="product-box">

                            <Carousel responsive={responsive} >
                                {mostPopularListFinal.map((item, i) => {
                                    return (


                                        <div className="product-single" key={i}>
                                            <div className="pic"><img src={item.image} alt="Product" /></div>
                                            <div className="product-title">
                                                <a href="#">
                                                    <h4>{item.title}</h4>
                                                </a>
                                                <h2 className="price">{item.price}</h2>
                                            </div>
                                            <div className="new-tag">New</div>

                                        </div>


                                    )
                                })}
                            </Carousel>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default MostPopular;