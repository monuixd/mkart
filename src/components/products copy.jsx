import React from 'react';
// import { productCategoryList } from '../productCategory';
import { productList } from '../productsList';
import { Link } from 'react-router-dom';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Products: productCategoryList
            products: productList

        }
    }

    componentDidMount() {
        var catArray = [];

        this.state.products.filter(function (item) {
            var a = catArray.findIndex(el => {
                //               console.log(el);
                return el.category === item.category;
            });
            //console.log(a <= -1);   

            if (a <= -1) {
                catArray.push({
                    category: item.category,
                    name: item.name,
                    price: item.price,
                    image: item.image
                })
            }
            return null;

        });

        this.setState({
            products: catArray
        })
    }

    render() {

        // const productCategoryList = this.state.Products;
        const productsList = this.state.products;
        // console.log(productsList);
        // var filterCategory = productsList.filter((item, i) => item.category > 1);
        // console.log("MONU", filterCategory);

        return (

            <div className="products-wrp">
                <div className="container">
                    <div className="heading">
                        <h2>Products <span>Category </span></h2>
                    </div>
                    <div className="product-box">
                        <div className="product-box-row">
                            {
                                productsList.map((item, i) => {
                                    // console.log("Array", item.category);
                                    // let productCatOne = new Set(productsList);
                                    // console.log("New Array", productCatOne);

                                    return (
                                        <div className="col-md-3 col-sm-6 col-xs-12" key={i}>
                                            <Link to={{
                                                pathname: '/product-list',
                                                pCategory: item.category
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

                            <div className="btn-box"> <a href="#.html" className="view-btn-out">View all Categories</a> </div>
                        </div>

                    </div>
                </div>
            </div>


        )
    }
}


export default Products;