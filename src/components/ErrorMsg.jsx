import React, { Component } from "react";
import {ErrorMessage} from "formik";

class ErrorMsg extends Component{
    render(){
        return(
            <div style={{color : "red"}}>
                <ErrorMessage 
                    name={this.props.name}
                />
            </div>
        )
    }
}
export default ErrorMsg;