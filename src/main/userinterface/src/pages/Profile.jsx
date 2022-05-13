import React, {Component} from 'react';
import '../style/Profile.scss'
import Navbar from "../components/Navbar";
import axios from "axios";
import Person from "../components/Person";


class Profile extends Component {




    constructor(props) {
        super(props);



        this.state = {
            persons:[]

        }

    }

    componentDidMount() {
        axios.get("http://localhost:8080/api/user/v1/person/1")
            .then(res => {
                console.log(res.data)
                this.setState({
                    persons:res.data
                })
            })
    }





    render() {


        return (
            <div className="profile">
                <Navbar/>
                <button onClick={this.props.logout}>Logout</button>
                <div className="info">
                    <p>{JSON.stringify(this.props.user)}</p>
                    <ul>
                    {this.state.persons.map(person => (
                        <Person person={person}/>
                    ))}
                    </ul>
                    <p>{JSON.stringify(this.state.persons)}</p>
                    <button onClick={this.getInfo}>get info!</button>
                </div>



                
            </div>
        );
    }
}

export default Profile;