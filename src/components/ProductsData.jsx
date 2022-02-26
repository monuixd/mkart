import axios from "axios";
import React, { Component } from "react";

class ProductData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productData: []
        }
    }

    componentDidMount() {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                //console.log(response);
                this.setState({
                    productDataList: response.data
                })

                let prodDataNew = [];

                this.state.productDataList.filter((item) => {
                    let prodData = prodDataNew.findIndex(el => {
                        return el.category === item.category
                    })
                    if (prodData <= -1) {
                        prodDataNew.push({
                            category: item.category,
                            name: item.name,
                            price: item.price,
                            image: item.image
                        })
                    }
                })

                this.setState({
                    productDataList: prodDataNew
                })
            })

    }




    render() {
        const productDataListFinal = this.state.productDataList;
        return (
            <></>
        )
    }



}

export default ProductData;
