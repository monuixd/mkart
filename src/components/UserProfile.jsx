import React, { Component } from 'react';

import UserContext, { UserConsumer } from './UserContext';


class UserProfile extends Component {

    static contextType = UserContext;

    componentDidMount() {
        const userMsg = this.context;
        console.log(userMsg)
    }



    render() {
        console.log(this.props);
        return (
            // <UserConsumer>
            //     {userMsg}
            // </UserConsumer>

            <h2> {this.context.name}</h2>

        )

    }

}

export default UserProfile;