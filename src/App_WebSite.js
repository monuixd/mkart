import React, {Component} from "react";
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import { Route, Switch } from 'react-router-dom';
import AboutUs from './components/aboutus';
import ProductList from './components/product-list';
import ProductDetail from './components/product-detail';
import ContactUs from './components/contactus';

// import ParentCom from "./components/parentCom";
// import Counter from "./components/counter";

// import { UserProvider } from "./components/UserContext";
// import UserProfile from "./components/UserProfile";
// import UserProfile1 from "./components/UserProfile1";


class App extends Component {
  //const user = { name: 'Monu', loggedIn: true }

  constructor(props) {
    super(props);
    this.state = {
        products: [],
        loader: ""

    }

  }

handleCallback (childData) {
  this.setState ({
    products:childData.productCatArray
  })
}

 render(){

  return (
    <div className="App">
      {/* <UserProvider value={user}>
        <UserProfile />
        <UserProfile1 />
      </UserProvider> */}

      {/* <ParentCom/> */}



      <Header />
      <Switch>
        <Route exact path='/'
          render={(props) => <Home {...props} parentCallback = {this.handleCallback} />}
        />
        <Route path='/about-us' component={AboutUs} />
        <Route path="/product-list" component={ProductList} />
        <Route path="/product-detail" component={ProductDetail} />
        <Route path="/contact-us" component={ContactUs} />

      </Switch>
      <Footer prodCat={this.state.products}  />

      {/* <Counter /> */}
    </div>
  );
}
}

export default App;
