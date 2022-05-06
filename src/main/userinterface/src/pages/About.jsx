import React from 'react';
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div>
            <h1>VCPDR</h1>
            <p>This website is for you to share your data</p>
            <Link to="/">
                <button>Return to main</button>
            </Link>
        </div>
    );
};

export default About;