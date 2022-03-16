import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

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

    render() {
        //console.log("PROP MOST", this.props);
        const productItemList = this.props.prodItemList;

        return (
            <>
                <div className="most-popular-wrp">
                    <div className="container">
                        <div className="heading">
                            <h2>Most <span>Popular</span></h2>
                        </div>
                        <div className="product-box">
                            {(this.props.loader) ?
                                <div className="loader"></div>
                                :
                                <>
                                    <Carousel responsive={responsive} >
                                        {productItemList.map((item, i) => {
                                            return (


                                                <div className="product-single" key={i}>
                                                    <div className="pic"><img src={item.image} alt="Product" /></div>
                                                    <div className="product-title">
                                                        <Link to={{
                                                            pathname: "/product-detail",
                                                            currentItem: item.id,
                                                            prodAllItem: productItemList

                                                        }}>
                                                            <h4>
                                                                <small>{item.category}</small><br />
                                                                {item.title}</h4>
                                                        </Link>
                                                        <h2 className="price"><i className="fa fa-inr"></i> {item.price}</h2>
                                                    </div>

                                                </div>


                                            )
                                        })}
                                    </Carousel>
                                </>
                            }



                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default MostPopular;