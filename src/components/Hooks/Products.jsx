import React, { useState, useEffect } from "react";
import Breadcrumb from "../breadcrumb";
import axios from "axios";


function Products() {

    const [prod, setProd] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                //console.log("HOOKS", res.data);
                setProd(res.data)
            })
    })

    //console.log("prod", prod)

    return (

        <>

            <Breadcrumb />
            <div className="products-wrp">
                <div className="container">
                    <div className="heading">
                        <h2>Products <span>Category </span></h2>
                    </div>
                    <div className="product-box">
                        <div className="product-box-row">
                            {prod.map((item, i) => {
                                return (
                                    <div className="col-md-3 col-sm-6 col-xs-12" key={i}>
                                        <a href="">
                                            <div className="product-single">
                                                <div className="pic">
                                                    <img src={item.image} alt="Product" />
                                                </div>
                                                <div className="product-title">
                                                    <h4>{item.category}</h4>
                                                </div>
                                                {/* <div className="new-tag">New</div> */}
                                            </div>
                                        </a>
                                    </div>
                                )
                            })}
                            <div className="btn-box"> <button type='button' className="view-btn-out">View all Categories</button> </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Products;