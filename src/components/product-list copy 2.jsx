import React, { Component } from "react";
import Breadcrumb from "./breadcrumb";
import { productList } from "../productsList";
import { Link } from "react-router-dom";

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productCatItem: productList,

        }
        this.addToCart = this.addToCart.bind(this);
        this.removeCart = this.removeCart.bind(this);
    }

    addToCart(item) {
        //console.log("CLick",item)
        // this.setState({
        //     cartCount: this.state.cartCount + 1
        // })

        this.state.productCatItem.map((el) => {
            // console.log(el.name);
            // console.log(item.name);
            if (item.name === el.name) {
                item.qty = item.qty + 1
            }

        })

        this.setState({
            productCatItem: this.state.productCatItem
        })
    }

    removeCart() {
        this.setState(prevState => ({
            cartCount: prevState.cartCount - 1

        }))

    }


    // componentDidMount(){
    //     const {location} = this.props
    //     var pCategory = location.pCategory;
    //     this.setState({
    //         filterCat: pCategory
    //     })
    //     console.log("Store", this.state.filterCat);
    // }

    render() {
        const productCatItemList = this.state.productCatItem;
        const { location } = this.props
        console.log("CHeck 1", location.pCategory);
        // console.log("CHeck 1", this.props.location.pCategory);

        var pCategory = location.pCategory;
        //var pCategory = this.props.location.pCategory;

        const filterData = productCatItemList.filter((item, i) => item.category == pCategory);

        console.log("Filter Data", filterData);

        return (
            <>
                <Breadcrumb />
                <section className="mid-wrp">

                    <div className="products-wrp">
                        <div className="container">

                            <div className="row">
                                <div className="col-md-3 col-sm-4 col-xs-12">
                                    <div className="categories-list-box">
                                        <h4>Categories</h4>
                                        <div className="cat-listing">
                                            <ul id="prd_cat_list">
                                                <li className="active"><a href="products.html"><span>Tablets</span> <span>( 04 )</span></a>
                                                    <ul>
                                                        <li><a href="single-product.html">Zenith Nutrition Probiotic Immune Capsules 90's</a> </li>
                                                        <li><a href="single-product.html">Vitawin Vitamin C Capsules 60's</a> </li>
                                                        <li><a href="single-product.html">Organic India Immunity Veg Capsules 60's</a> </li>
                                                        <li><a href="single-product.html">Setu Your Gut Probiotics for Digestion and Immunity Capsule 30's</a> </li>
                                                    </ul>
                                                </li>

                                                <li><a href="products.html"><span>Capsule</span>  <span>( 04 )</span></a>
                                                    <ul>
                                                        <li><a href="single-product.html">Zenith Nutrition Probiotic Immune Capsules 90's</a> </li>
                                                        <li><a href="single-product.html">Vitawin Vitamin C Capsules 60's</a> </li>
                                                        <li><a href="single-product.html">Organic India Immunity Veg Capsules 60's</a> </li>
                                                        <li><a href="single-product.html">Setu Your Gut Probiotics for Digestion and Immunity Capsule 30's</a> </li>
                                                    </ul>
                                                </li>

                                                <li><a href="products.html"><span>syrup</span> <span>( 04 )</span></a>
                                                    <ul>
                                                        <li><a href="single-product.html">Zenith Nutrition Probiotic Immune Capsules 90's</a> </li>
                                                        <li><a href="single-product.html">Vitawin Vitamin C Capsules 60's</a> </li>
                                                        <li><a href="single-product.html">Organic India Immunity Veg Capsules 60's</a> </li>
                                                        <li><a href="single-product.html">Setu Your Gut Probiotics for Digestion and Immunity Capsule 30's</a> </li>
                                                    </ul>
                                                </li>

                                                <li><a href="products.html"><span>sanitizer</span>  <span>( 04 )</span></a>
                                                    <ul>
                                                        <li><a href="single-product.html">Zenith Nutrition Probiotic Immune Capsules 90's</a> </li>
                                                        <li><a href="single-product.html">Vitawin Vitamin C Capsules 60's</a> </li>
                                                        <li><a href="single-product.html">Organic India Immunity Veg Capsules 60's</a> </li>
                                                        <li><a href="single-product.html">Setu Your Gut Probiotics for Digestion and Immunity Capsule 30's</a> </li>
                                                    </ul>
                                                </li>


                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-9 col-sm-8 col-xs-12">

                                    <div className="product-box">
                                        <div className="product-box-row">

                                            {filterData.map((item, i) => {

                                                return (
                                                    <div className="col-md-3 col-sm-6 col-xs-12">
                                                        <div className="product-single">
                                                            <div className="pic"><img src={item.image} alt={item.name} /></div>
                                                            <div className="product-title">
                                                                <Link to="/product-detail">
                                                                    <h4>{item.name}</h4>
                                                                    <h2>{item.price}</h2>
                                                                </Link>
                                                                {(item.qty == 0) ?
                                                                    <button className="btn btn-warning" onClick={(e) => this.addToCart(item)}>Add to Cart</button>
                                                                    :
                                                                    <div className="counter-box">
                                                                        <button className="btn btn-white" onClick={this.removeCart}>-</button>
                                                                        <p>{item.qty}</p>
                                                                        <button className="btn btn-white" onClick={(e) => this.addToCart(item)}>+</button>
                                                                    </div>

                                                                }

                                                            </div>
                                                            <div className="new-tag">New</div>

                                                        </div>
                                                    </div>

                                                )
                                            })}


                                        </div>
                                    </div>
                                    <div className="pagination-box">
                                        <p>20 / Page</p>
                                        <div className="filter-hor">
                                            <select className="selectpicker">
                                                <option selected="selected" value="0">1-20</option>
                                                <option value="1">21-40</option>
                                                <option value="2">41-60</option>
                                                <option value="3">61-80</option>
                                            </select>
                                        </div>
                                        <ul className="pagination">
                                            <li className="disabled"><a href="javascript:void(0);"><i className="fa fa-angle-left"></i></a></li>
                                            <li className="active"><a href="javascript:void(0);">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                            <li><a href="javascript:void(0);"><i className="fa fa-angle-right"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="get-in-touch-wrp">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 col-sm-5 col-xs-12">
                                    <h2>Stay Updated!</h2>
                                    <p>Sign up for our newsletter, and get the latest from Aska Bio Tech inboxed</p>
                                </div>
                                <div className="col-md-7 col-sm-7 col-xs-12">
                                    <div className="subscribe-box">
                                        {/* <form> */}
                                        <input className="form-control" type="email" placeholder="Your email address..." />
                                        <input type="button" className="btn" value="Subscribe" />
                                        {/* </form> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>
            </>
        )
    }

}


export default ProductList;