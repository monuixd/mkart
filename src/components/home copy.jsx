import React, { Component } from 'react';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Monu Chauhan",
            age: 26,
            address: 'Vipin garden',
        }
    };


    render() {
        console.log(this);
        var myname = this.state.name;
        myname = 'Rahul';
        return (<div>
            <h2>{myname}</h2>
            <p>abc fkjdf kjndck llnsd</p>
        </div>)
    }
}

export default Home;