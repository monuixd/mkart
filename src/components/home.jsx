import React, { Component } from 'react';
import Slider1 from './slider1';
import Promotion from './promotion';
import Products from './products';
// import ProductCat from './productCategory';
import MostPopular from './mostPopular';
import Login from './login';
//import Register from './register';
import RegisterFormik from './RegisterFormik';


class Home extends Component {

    render() {

        return (
            <>

                <Slider1 />

                <section className="mid-wrp">
                    <Promotion />
                    <MostPopular />
                    <Products />

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