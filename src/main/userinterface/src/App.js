import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import React, {useState} from "react";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";
import About from "./pages/About";

function App() {

    const [user, setUser] = useState(null);



    const login = (data) => {
        setUser(data);
    }

    const logout = () => {
        setUser(null);
    }

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={user !== null ? <Profile logout={logout} user={user}/> : <Landing login={login}/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>

            </Router>

        </div>
    );
}

export default App;
