import React from "react";
// import Images from "./images";
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (<>
            <header data-spy="affix" data-offset-top="200">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-menu-bar"> <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="menu-indicate">Menu</span>
                        </button>

                        <Link to="/" className="navbar-brand">
                            <img src="/assets/images/logo.png" height={42} alt="mKart" />
                            {/* <img src={require('./assets/images/logo.png').default} alt="CPPLUS" /> */}
                        </Link>

                    </div>
                    <form action="">
                        <div className="search-box">

                            <input type="search" placeholder="Search the store" />
                            <button type="submit" className="btn icon-search">
                                <i className="fa fa-search"></i>
                            </button>

                        </div>
                    </form>
                    <div className="collapse navbar-collapse" id="nav-menu-bar">
                        <ul className="nav navbar-nav menu-top">
                            {/* <li className="active"><Link to="/">Home</Link></li> */}
                            {/* <li><Link to="/about">About Us</Link></li> */}
                            <li><a href="#">Medicines</a></li>
                            <li><a href="#">Offers</a></li>

                            <li className="dropdown"><a href="#" data-toggle="dropdown" className="dropdown-toggle">Hooks</a>
                                <ul className="dropdown-menu">
                                    <li><a href="/hooks-products">Products</a></li>
                                </ul>
                            </li>
                            {/* <li><Link to="/contact-us">Contact Us</Link></li> */}
                            <li><a href="#loginModal" data-toggle="modal" className="btn btn-primary">Login</a></li>

                        </ul>
                    </div>
                </div>
            </header>

        </>
        )
    }
}

export default Header;