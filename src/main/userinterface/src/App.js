import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import {useState} from "react";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";

function App() {

    const [loggedIn, setLoggedIn] = useState(false);

    const login = () => {
        setLoggedIn(true);
    }

    const logout = () => {
        setLoggedIn(false);
    }

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={loggedIn ? <Profile logout={logout}/> : <Landing login={login}/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                </Routes>

            </Router>

        </div>
    );
}

export default App;
