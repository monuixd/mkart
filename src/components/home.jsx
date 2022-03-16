import React, { Component } from 'react';
import Slider1 from './slider1';
import Promotion from './promotion';
import Products from './products';
import MostPopular from './mostPopular';
import Login from './login';
import RegisterFormik from './RegisterFormik';
import axios from 'axios';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            productItem: [],
            loader: true

        }
    }

    componentDidMount() {
        axios.get("https://fakestoreapi.com/products")
            //axios.get("https://rss.applemarketingtools.com/api/v2/us/music/most-played/50/albums.json")
            .then(response => {
                //console.log(response)
                this.setState({
                    productItem: response.data
                })

                let productCatArray = [];
                this.state.productItem.filter((item) => {

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

                });
                this.props.parentCallback({
                    productCatArray,
                    loader: false
                })
            })

    }

    render() {

        return (
            <>

                <Slider1 />

                <section className="mid-wrp">
                    <Promotion />
                    <MostPopular prodItemList={this.state.productItem} loader={this.state.loader} />
                    <Products productList={this.state.productList} prodItemList={this.state.productItem} loader={this.state.loader} />

                    {/* <ProductCat/> */}


                </section>

                <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>

                                <Login />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>

                                <RegisterFormik />
                            </div>
                        </div>
                    </div>
                </div>

            </>

        )
    }
}

export default Home;