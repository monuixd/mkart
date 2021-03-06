import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "./breadcrumb";

class ProductDetail extends Component {

    render() {

        const { location } = this.props;
        var productItemDetail = location.prodAllItem;
        var currentItem = location.currentItem;
        var prodCurrentItem = productItemDetail.filter((item) => item.id == currentItem);



        return (
            <>
                <Breadcrumb />
                <section className="mid-wrp">

                    <div className="single-products-wrp">
                        <div className="container">
                            {prodCurrentItem.map((item) => {
                                return (
                                    <div className="single-product-box">

                                        <div className="row">

                                            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                                <div className="pic">
                                                    <img src={item.image} />
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                                <div className="dscb m-b-20">
                                                    <h3>{item.title}</h3>
                                                    <h4>
                                                        <Link to={{
                                                            pathname: '/product-list',
                                                            pCategory: item.category,
                                                        }}>{item.category}</Link>
                                                    </h4>
                                                    <p>{item.description}</p>
                                                    <h2 className="price"><i className="fa fa-rupee"></i> {item.price}</h2>
                                                    <p>Rating : <span className="badge">{item.rating.rate}</span></p>

                                                </div>
                                                <button className="btn btn-warning btn-lg">Add to Cart</button>
                                            </div>


                                        </div>
                                        <div className="single-product-dscb-box">
                                            <div className="dscb-tabs-box">
                                                <ul id="dscb_tabs" className="nav nav-tabs" role="tablist">
                                                    <li role="presentation" className="active"><a href="#Description" aria-controls="Description" role="tab" data-toggle="tab">Description</a></li>
                                                    <li role="presentation"><a href="#KeyBenefits" aria-controls="KeyBenefits" role="tab" data-toggle="tab">Key Benefits</a></li>
                                                    <li role="presentation"><a href="#DirectionforUseDosage" aria-controls="DirectionforUseDosage" role="tab" data-toggle="tab">Direction for Use/Dosage</a></li>
                                                    <li role="presentation"><a href="#SafetyInformationPrecaution" aria-controls="SafetyInformationPrecaution" role="tab" data-toggle="tab">Safety Information/Precaution</a></li>
                                                    <li role="presentation"><a href="#OtherInformation" aria-controls="SafetyInformationPrecaution" role="tab" data-toggle="tab">Other Information</a></li>
                                                </ul>
                                                <div className="tab-content">
                                                    <div role="tabpanel" className="tab-pane active" id="Description">
                                                        <div className="panel-body">
                                                            <p>NA</p>
                                                        </div>
                                                    </div>
                                                    <div role="tabpanel" className="tab-pane" id="KeyBenefits">
                                                        <div className="panel-body">
                                                            <p>NA</p>
                                                        </div>
                                                    </div>
                                                    <div role="tabpanel" className="tab-pane" id="DirectionforUseDosage">
                                                        <div className="panel-body">
                                                            <p>NA</p>
                                                        </div>
                                                    </div>
                                                    <div role="tabpanel" className="tab-pane" id="SafetyInformationPrecaution">
                                                        <div className="panel-body">
                                                            <p>NA</p>
                                                        </div>
                                                    </div>
                                                    <div role="tabpanel" className="tab-pane" id="OtherInformation">
                                                        <div className="panel-body">
                                                            <p>NA</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </>

        )
    }

}

export default ProductDetail;