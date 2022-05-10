import React, {Component} from 'react';
import Bar from "../components/Bar";


class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentTab:"Tab 1",
            tabs:[
                {

                },
                {

                }
            ]

        }
    }

    render() {
        return (
            <div>
                <Bar/>
                <p>hello: {this.props.perms.toString()}</p>
                <button onClick={this.props.search}>Exit!</button>
            </div>
        );
    }
}

export default Search;