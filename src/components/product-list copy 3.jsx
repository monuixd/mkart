import React, { Component } from "react";
import Breadcrumb from "./breadcrumb";
import { Link } from "react-router-dom";
import axios from "axios";

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productCatItem: []
        }
        this.addToCart = this.addToCart.bind(this);
        this.removeCart = this.removeCart.bind(this);
    }

    componentDidMount() {
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                this.setState({
                    productCatItem: res.data
                })
            })
    }

    addToCart(item) {
        this.state.productCatItem.map((el) => {
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



    render() {
        const productCatItemList = this.state.productCatItem;
        const { location } = this.props
        var pCategory = location.pCategory;
        var allCategory = location.allCategory;
        //console.log("CHeck 1", this.props);
        console.log("CHeck 1", this.props);
        const filterData = productCatItemList.filter((item, i) => item.category == pCategory);


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
                                            <ul>
                                                {allCategory.map((item, i) => {
                                                    return (
                                                        <li key={i}>
                                                            <Link to={{
                                                                pathname: '/product-list'
                                                            }}>{item.category}
                                                            </Link></li>
                                                    )
                                                })}

                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-9 col-sm-8 col-xs-12">

                                    <div className="product-box">
                                        <div className="product-box-row">

                                            {filterData.map((item, i) => {

                                                return (
                                                    <div className="col-md-3 col-sm-6 col-xs-12" key={i}>
                                                        <div className="product-single">
                                                            <div className="pic"><img src={item.image} alt={item.name} /></div>
                                                            <div className="product-title">
                                                                <Link to={{
                                                                    pathname: "/product-detail",
                                                                    currentItem: item.id
                                                                }}>
                                                                    <h4>{item.title}</h4>
                                                                    <p>{item.description}</p>
                                                                    <h2 className="price"><i className="fa fa-rupee"></i> {item.price}</h2>
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
                                            <li className="disabled"><a href="#"><i className="fa fa-angle-left"></i></a></li>
                                            <li className="active"><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                            <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                                        </ul>
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