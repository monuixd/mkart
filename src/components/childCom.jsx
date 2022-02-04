import React, { Component } from "react";

class ChildCom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            childName: "Child Component"
        }
    }

    render() {
        var childFName = this.state.childName;
        //console.log(this.props);
        return (
            <div>
                <h2>Hello {childFName}</h2>
                <h3 style={{ color: "red" }}>This is from Parent Component {this.props.parentDyn}, {this.props.count}</h3>

            </div>
        )
    }
}

export default ChildCom;