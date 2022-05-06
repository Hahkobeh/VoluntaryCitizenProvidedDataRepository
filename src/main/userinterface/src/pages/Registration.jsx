import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                email: "",
                phone: "",
                password: "",
                personGivenName: "",
                personSurName: ""
            },
            page: 0

        };

    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]:value
        })
        console.log(this.state);

    }

    render() {
        console.log(this.state.page);
        return (
            <>
                <Link to="/">
                    <button>Return</button>
                </Link>
                <this.InformationEntry/>
            </>
        )

    }

    InformationEntry = () => {
        switch(this.state.page){
            case 0:
                return (
                    <>
                        <this.pageNum/>
                        <h1>enter email</h1>
                        <label>email
                            <input type="text" name="email" onChange={this.handleChange}/>
                        </label>
                    </>
                );
            case 1:
                return (
                    <this.pageNum/>
                );
            case 2:
                return (
                    <this.pageNum/>
                );
            default:
                return (
                    <Link to="/">
                        <button>BACK!</button>
                    </Link>
                );
        }
    }

    pageNum = () => {
        return (
            <>
            <p>page {this.state.page}!</p>
            <button onClick={() => this.setState(prevState =>
                ({page: prevState.page + 1})
            )}>Next page!</button>
            </>
        )
    }
}

export default Registration;