import React, { createContext, useState, useEffect } from "react";
import Header from "./components/header";
import Home from "./components/home";
// import Footer from "./components/footer";
import { Route, Switch } from "react-router-dom";
import AboutUs from "./components/aboutus";
import ProductList from "./components/product-list";
import ProductDetail from "./components/product-detail";
import ContactUs from "./components/contactus";
import axios from "axios";

export const ProductData = createContext();

function App() {
  const [prod, setProd] = useState([]);
  const [prodList, setProdList] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      //axios.get("https://rss.applemarketingtools.com/api/v2/us/music/most-played/50/albums.json")
      .then((response) => {
        //console.log("response", prod);
        setProd(response.data);
        setProdList(response.data);

        let productCatArray = [];
        prod.filter((item) => {
          let prodCat = productCatArray.findIndex((el) => {
            return el.category === item.category;
          });

          if (prodCat <= -1) {
            productCatArray.push({
              category: item.category,
              name: item.name,
              price: item.price,
              image: item.image,
            });
          }
        });

        setProd(productCatArray);
        console.log("DR1", prod);
      });
  }, []);

  //console.log("DR2", prod);
  return (
    <div className="App">
      <Header />

      <Switch>
        <ProductData.Provider value={prod}>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/product-list" component={ProductList} />
          <Route path="/product-detail" component={ProductDetail} />
          <Route path="/contact-us" component={ContactUs} />
        </ProductData.Provider>
      </Switch>
      {/* <Footer prodCat={this.state.products} /> */}

      {/* <Counter /> */}
    </div>
  );
}

export default App;
