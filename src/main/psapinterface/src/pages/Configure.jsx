import React from 'react';

function Configure(props) {
    return (
        <div className="configure">
            <div className="labels">
                <label>
                    <input type="checkbox" checked={props.perms.at(0)} name="fire" onChange={props.handleClick}/>
                    Fire
                </label>
                <label>
                    <input type="checkbox" checked={props.perms.at(1)} name="police" onChange={props.handleClick}/>
                    Police
                </label>
                <label>
                    <input type="checkbox" checked={props.perms.at(2)} name="ems" onChange={props.handleClick}/>
                    EMS
                </label>
            </div>
            <button onClick={props.search}>Enter!</button>


        </div>
    );
}

export default Configure;