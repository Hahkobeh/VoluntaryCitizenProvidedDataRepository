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

        }

    }

    render() {
        console.log(this.state.page)
        switch(this.state.page){
            case 0:
                return (
                    <this.pageNum/>
                )
            case 1:
                return (
                    <this.pageNum/>
                )
            case 2:
                return (
                    <this.pageNum/>
                )
            default:
                return (
                    <Link to="/">
                        <button>BACK!</button>
                    </Link>
                )
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