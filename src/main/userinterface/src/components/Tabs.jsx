import React, {Component} from 'react';
import Tab from './Tab';

class Tabs extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="bar">
                <div className='tabs'>
                    <Tab name="User" colour="r"/>
                    <Tab name="Person" colour="b"/>
                    <Tab name="Property" colour="r"/>
                    <Tab name="Vehicle" colour="b"/>
                    <Tab name="Medical" colour="r"/>
                </div>
                <div className="tab-buttons main">
                    <button>add info</button>
                    <button onClick={this.props.logout}>Logout</button>
                </div>
            </div>
        );
    }
}

export default Tabs;