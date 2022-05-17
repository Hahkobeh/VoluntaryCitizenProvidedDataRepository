import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import '../style/Landing.scss'


function Landing(props){


    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    useEffect(() => {
        testConnection();
    })

    const testConnection = () => {
        
        axios.get("http://localhost:8080/api/user/v1/test")
            .catch(err => {
                console.log("NOT CONNECTED TO BACKEND!")
            })
        
    }
    

    const attemptLogin = (e) => {
        e.preventDefault();




        if(email === ""){
            return;
        }

        if(password === ""){
            return;
        }

        const loginInfo = {
            email: email,
            password: password
        };


        console.log(loginInfo);

        axios.post("http://localhost:8080/api/user/v1/login", loginInfo)
            .then(res => {
                console.log(res.data)
                console.log(typeof res.data)
                if(res.data !== "") {
                    props.login(res.data)
                }
            });


    }

    


    return (
        
        
        
        <div className="landing">
            <h1>VCPDR</h1>
            <form onSubmit={attemptLogin}>
                <label>
                    email
                    <input type="text" value={email} onChange={(e) => setEmail( e.target.value)}/>
                </label>
                <label>
                    password
                    <input type="password" value={password} onChange={(e) => setPassword( e.target.value)}/>
                </label>
                <input type="submit"/>
            </form>
            <Link to="/registration">
                <button>Register!</button>
            </Link>
            <Link to="/about">
                <button>About!</button>
            </Link>



        </div>
    );

}

export default Landing;