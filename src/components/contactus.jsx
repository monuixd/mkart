import React, { Component } from "react";
import Breadcrumb from './breadcrumb';
import Signup from "./FomikRegister";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: "",
      course: "",
    }
  }

  render() {
    return (
      <>
        <Breadcrumb />
        <div className="getintouch-wrp">
          <div className="container">

            <Signup />

            {/* <div className="row">
                    <form className="col-md-6">
                    <div className="heading">
            <h3>Business <span>Query</span></h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a.</p>
          </div>
                      <div className="col-xs-12">
                        <div className="form-group">
                          <label>Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Enter your name"
                                name="Name"
                                value={this.state.name}
                            />
                        </div>
                      </div>
                      <div className="col-xs-12">
                        <div className="form-group">
                          <label>E-mail Address</label>
                          <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Enter your e-mail address"
                            name="Email"
                            value={this.state.email}
                           />
                        </div>
                      </div>
                      <div className="col-xs-12">
                        <div className="form-group">
                          <label>Mobile No.</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter your mobile no." 
                            name="MobileNo"
                            value={this.state.mobile}
                          />
                        </div>
                      </div>
                      <div className="col-xs-12">
                        <div className="form-group">
                          <label>Course</label>
                          <select 
                            className="form-control" 
                            name="course" 
                            value={this.state.course}>
                            <option selected="selected" value="0">Type of Course</option>
                            <option value="1">Angular</option>
                            <option value="2">ReactJs</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="col-md-12 col-sm-2 col-xs-12">
                        <div className="form-group">
                          <button type="submit" className="submit-btn">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div> */}
          </div>
        </div>

      </>


    )
  }
}

export default ContactUs;