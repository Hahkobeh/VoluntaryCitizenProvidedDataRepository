import React, {Component} from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <p>hello!</p>
                <button onClick={this.props.logout}>Logout!</button>
                
            </div>
        );
    }
}

export default Profile;