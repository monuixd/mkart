import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { productList } from '../productsList';

class ProductCat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productCatName: productList
        }
    }

    componentDidMount() {
        var prodCatNew = [];
        console.log(prodCatNew);

        this.state.productCatName.filter(function (item) {
            var x = prodCatNew.findIndex(el => {
                return el.category === item.category;
            });

            if (x <= -1) {
                prodCatNew.push({
                    category: item.category,
                    name: item.name,
                    price: item.price,
                    image: item.image
                })
            }

            return null;



        });
        this.setState({
            productCatName: prodCatNew
        })
    }



    render() {

        const prodCat = this.state.productCatName;

        return (

            <div className="products-wrp">
                <div className="container">
                    <div className="heading">
                        <h2>Products <span>Category </span></h2>
                    </div>
                    <div className="product-box">
                        <div className="product-box-row">
                            {prodCat.map((item) => {
                                return (
                                    <div className="col-md-3 col-sm-6 col-xs-12">
                                        <Link to={{
                                            pathname: '/product-list',
                                            prodCat: item.category
                                        }}>
                                            <div className="product-single">
                                                <div className="pic">
                                                    <img src={item.image} alt="Product" />
                                                </div>
                                                <div className="product-title">
                                                    <h4>{item.category}</h4>
                                                </div>
                                                <div className="new-tag">New</div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}




                            <div className="btn-box"> <a href="#" className="view-btn-out">View all Categories</a> </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default ProductCat;