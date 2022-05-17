import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import React, {useEffect, useState} from "react";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";
import About from "./pages/About";

function App() {

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        console.log(typeof sessionStorage.getItem("user"))
        if(sessionStorage.getItem("user") !== "null"){
            console.log("here!")
            setLoggedIn(true);
        }
    }, []);



    const login = (data) => {
        sessionStorage.setItem("user", JSON.stringify(data));
        setLoggedIn(true);

    }

    const logout = () => {
        sessionStorage.setItem("user", JSON.stringify(null));
        setLoggedIn(false);
    }

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={loggedIn ? <Profile logout={logout} user={JSON.parse(sessionStorage.getItem("user"))}/> : <Landing login={login}/>}/>
                    <Route path="/registration" element={<Registration Navigate={Navigate}/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>

            </Router>

        </>
    );
}

export default App;
