import React, { Component } from "react";
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import { Route, Switch } from 'react-router-dom';
import AboutUs from './components/aboutus';
import ProductList from './components/product-list';
import ProductDetail from './components/product-detail';
import ContactUs from './components/contactus';
import Products from "./components/Hooks/Products";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loader: ""

    }

    this.handleCallback = this.handleCallback.bind(this)
  }

  handleCallback(childData) {
    //console.log("APP CONS", { childData })
    this.setState({
      products: childData.productCatArray
    })
  }

  render() {

    //console.log("APP Render", this.state.products)
    return (
      <div className="App">

        <Header />
        <Switch>
          <Route exact path='/'
            render={(props) => <Home {...props} parentCallback={this.handleCallback} />}
          />
          <Route path='/about-us' component={AboutUs} />
          <Route path="/product-list" component={ProductList} />
          <Route path="/product-detail" component={ProductDetail} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/hooks-products" component={Products} />

        </Switch>
        <Footer prodCat={this.state.products} />

        {/* <Counter /> */}
      </div>
    );
  }
}

export default App;
