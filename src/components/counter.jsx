import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            //nextCount : true
        }
        this.incFun = this.incFun.bind(this);
        this.decFun = this.decFun.bind(this);
    }
    incFun() {
        // wrong method to change the state ==========
        // var a = this.state.count;
        // var b = a + 1;

        this.setState({
            count: this.state.count + 1
        }, () => { console.log(this.state.count * 2, "Inside") }
        )
        console.log("Check Count", this.state.count * 2);
    }

    decFun() {
        // this.setState({
        //     count : this.state.count -1
        // })

        this.setState(prevState => ({
            count: prevState.count - 1
        }))
    }



    render() {
        return (
            <div className="text-center">
                {(this.state.count == 0) ?
                    <button onClick={this.incFun}>Add to Cart</button>
                    :
                    <div className="counter-box">

                        <button className="btn btn-white" onClick={this.decFun}>-</button>
                        <h2>{this.state.count}</h2>
                        <button className="btn btn-white" onClick={this.incFun}>+</button>
                    </div>
                }
            </div>

        )
    }
}

export default Counter;