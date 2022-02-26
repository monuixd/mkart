import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: {},
            loader: true

        }
    }

    componentDidMount() {
        axios.get("https://fakestoreapi.com/products")
            //axios.get("https://rss.applemarketingtools.com/api/v2/us/music/most-played/50/albums.json")
            .then(Response => {
                console.log(Response)
                this.setState({
                    productList: Response.data
                })

                let productCatArray = [];
                this.state.productList.filter((item) => {

                    let prodCat = productCatArray.findIndex(el => {
                        return el.category === item.category
                    })

                    if (prodCat <= -1) {
                        productCatArray.push({
                            category: item.category,
                            name: item.name,
                            price: item.price,
                            image: item.image
                        })
                    }

                })

                this.setState({
                    productList: productCatArray,
                    loader: false

                })
            })

    }


    render() {

        const productListFinal = this.state.productList;

        return (

            <div className="products-wrp">
                <div className="container">
                    <div className="heading">
                        <h2>Products <span>Category </span></h2>
                    </div>
                    <div className="product-box">
                        <div className="product-box-row">
                            {(this.state.loader) ?
                                <div className="loader"></div>
                                :
                                <>
                                    {
                                        productListFinal.map((item, i) => {

                                            return (
                                                <div className="col-md-3 col-sm-6 col-xs-12" key={i}>
                                                    <Link to={{
                                                        pathname: '/product-list',
                                                        pCategory: item.category,
                                                        allCategory: productListFinal
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
                                        })
                                    }
                                </>

                            }


                            <div className="btn-box"> <button type='button' className="view-btn-out">View all Categories</button> </div>
                        </div>

                    </div>
                </div>
            </div>


        )
    }
}


export default Products;