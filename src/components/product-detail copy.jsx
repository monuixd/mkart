import React, { Component } from "react";
import Breadcrumb from "./breadcrumb";
// import { productList } from "../productsList";


class ProductDetail extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         productCatItem: productList
    //     }
    // }
    render() {
        // const productCatItemList = this.state.productCatItem;
        return (
            <>
                <Breadcrumb />
                <section className="mid-wrp">

                    <div className="single-products-wrp">
                        <div className="container">

                            <div className="single-product-box">
                                <div className="row">
                                    {/* {productCatItemList.map((item, i) => {
                                return(
                                    <> */}
                                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                        <div className="pic"> <img src="/assets/images/products/tablets/1.webp" /> </div>
                                    </div>
                                    <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                        <div className="dscb">
                                            <h3>Zenith Nutrition Probiotic Immune Capsules 90's</h3>
                                            <h4>Mfr: Zenith Nutricorp</h4>
                                            <p>Full Rim, Oval, Matt Black, Medium, 53-18-140, Mens. This "soft" rectangular frame flatters any face. Single Vision 1.5 index lens with anti-reflection coating. VX fog ID on lens is proof of authenticity.</p>
                                            <p>Full Rim, Oval, Matt Black, Medium, 53-18-140, Mens. This "soft" rectangular frame flatters any face. Single Vision 1.5 index lens with anti-reflection coating. VX fog ID on lens is proof of authenticity.</p>
                                            <p>Full Rim, Oval, Matt Black, Medium, 53-18-140, Mens. This "soft" rectangular frame flatters any face. Single Vision 1.5 index lens with anti-reflection coating. VX fog ID on lens is proof of authenticity.</p>
                                        </div>
                                    </div>
                                    {/* </>
                                )

                            })} */}

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
                                                    <p>Full Rim, Oval, Matt Black, Medium, 53-18-140, Mens. This "soft" rectangular frame flatters any face. Single Vision 1.5 index lens with anti-reflection coating. VX fog ID on lens is proof of authenticity.</p>
                                                    <p>Full Rim, Oval, Matt Black, Medium, 53-18-140, Mens. This "soft" rectangular frame flatters any face. Single Vision 1.5 index lens with anti-reflection coating. VX fog ID on lens is proof of authenticity.</p>
                                                    <p>Full Rim, Oval, Matt Black, Medium, 53-18-140, Mens. This "soft" rectangular frame flatters any face. Single Vision 1.5 index lens with anti-reflection coating. VX fog ID on lens is proof of authenticity.</p>
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

export default ProductDetail;