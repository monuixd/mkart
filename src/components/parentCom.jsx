import React, { Component } from "react";
import Child from "./childCom";

class ParentCom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ParentName: "Parent Component",
            Count: 1
        }
    }

    render() {

        return (
            <div>
                <h2>Hello {this.state.ParentName}</h2>
                <Child parentDyn={this.state.ParentName} count={this.state.Count} />

            </div>
        )
    }
}

export default ParentCom;