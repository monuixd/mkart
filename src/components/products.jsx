import React from 'react';
import { Link } from 'react-router-dom';

class Products extends React.Component {

    render() {

        const productListFinal = this.props.productList;
        const productItemList = this.props.prodItemList;

        //console.log("CHeck 1 productItemList", this.props);

        return (

            <div className="products-wrp">
                <div className="container">
                    <div className="heading">
                        <h2>Products <span>Category </span></h2>
                    </div>
                    <div className="product-box">
                        <div className="product-box-row">
                            {(this.props.loader) ?
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
                                                        allCategory: productListFinal,
                                                        prodAllItem: productItemList
                                                    }}>
                                                        <div className="product-single">
                                                            <div className="pic">
                                                                <img src={item.image} alt="Product" />
                                                            </div>
                                                            <div className="product-title">
                                                                <h4>{item.category}</h4>
                                                            </div>
                                                            {/* <div className="new-tag">New</div> */}
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