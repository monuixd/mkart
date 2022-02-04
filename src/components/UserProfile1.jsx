import React, { Component } from 'react';

import UserContext, { UserConsumer } from './UserContext';


class UserProfile1 extends Component {


    static contextType = UserContext;

    componentDidMount() {
        const userMsg = this.context;
        console.log(userMsg)
    }



    render() {
        console.log(this.props);
        return (
            <UserConsumer>
                {(x) => {
                    return <div>{x.name}</div>
                }}
            </UserConsumer>

            //<h2> {this.context.loggedIn}<small>Profile 1</small></h2>

        )

    }

}

export default UserProfile1;