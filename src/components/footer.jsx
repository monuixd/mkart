import React from "react";
import { Link } from "react-router-dom";
import StayUpdate from './stayUpdate';

class Footer extends React.Component {

    
    render() {
        const prodCatListFinal = this.props.prodCat;
        console.log("FOOTER ", this.props)
        return (
            <>
                <StayUpdate />
                <footer className="footer">
                    <div className="container">
                        <div className="row">

                            <div className="col-xs-12 col-sm-4 col-md-2">
                                <div className="footer-menu custom-footer-menu">
                                    <h4>Company</h4>
                                    <ul>
                                        <li><Link to="/about-us">About Us</Link></li>
                                        <li><Link to="/contact-us">Contact us</Link></li>
                                        <li><Link to="/careers">Careers</Link></li>
                                        <li><Link to="/blog">Blog</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xs-6 col-sm-3 col-md-3">
                                <div className="footer-menu">
                                    <h4>Featured Categories</h4>
                                    <ul>
                                        {prodCatListFinal.map((item, i) => {
                                            return (
                                                <li key={i}><a href="#">{item.category}</a></li>
                                            )
                                        })}

                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-3 col-md-3">
                                <div className="footer-menu">
                                    <h4>Need Help</h4>
                                    <ul>
                                        <li><a href="#">Browse All Medicines</a></li>
                                        <li><a href="#">Browse All Molecules</a></li>
                                        <li><a href="#">Browse All Cities & Areas</a></li>
                                        <li><a href="#">FAQs</a></li>
                                    </ul>

                                    <h4>Policy Info</h4>
                                    <ul>
                                        <li><a href="#">Editorial Policy</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Vulnerability Disclosure Policy</a></li>
                                        <li><a href="#">Terms and condition</a></li>
                                        <li><a href="#">Customer Support Policy</a></li>
                                        <li><a href="#">Return Policy</a></li>
                                    </ul>
                                </div>
                            </div>



                            <div className="col-xs-12 col-sm-3 col-md-4">
                                <div className="footer-menu custom-footer-menu">
                                    <h4>Get In Touch</h4>
                                    <ul className="with-icons">
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-map-marker"></i>
                                                A-12, Sector 4, Noida - 201301,Uttar pradesh India
                                            </a>
                                        </li>
                                        <li className="mobile"><a href="mailto:info@askabiotech.com"><i className="fa fa-envelope"></i> info@askabiotech.com</a></li>
                                        <li className="mobile"><a href="tel:+91-8791320780"><i className="fa fa-phone"></i> +91-8791320780</a></li>
                                    </ul>
                                    <h4>Follow Us</h4>
                                    <ul className="social">
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className="sub-footer">
                        <div className="copyright">© Copyright 2020 <span>Aska Bio Tech</span>, All Rights Reserved</div>
                    </div>
                </footer>


            </>
        )
    }
}


export default Footer;