import React, {useState} from 'react';
import {Link} from "react-router-dom";


function Landing(props){


    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("")

    const attemptLogin = (e) => {
        e.preventDefault();
        console.log("login attempted using:" + email + ", " + password);

        if(email === "hello!") {
            props.login()
        }
    }


    return (
        <div className="landing">
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


            <h1>ghehg</h1>

        </div>
    );

}

export default Landing;