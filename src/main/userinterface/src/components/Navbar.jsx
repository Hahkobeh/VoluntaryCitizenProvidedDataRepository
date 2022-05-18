import React from 'react';

const Navbar = (props) => {
    return (
        <div className='nav'>
            {/* <img/> */}
            <div className="nav-options">
                <h2 onClick={() => props.handleTabChange("persons")}>Person</h2>
                <h2 onClick={() => props.handleTabChange("properties")}>Property</h2>
                <h2 onClick={() => props.handleTabChange("vehicles")}>Vehicle</h2>
                <h2>User Info</h2>

            </div>

        </div>
    );
};

export default Navbar;