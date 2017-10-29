import React from 'react'

const NavComponent = (props) => (
    <div className="nav">
        <h1>Ora Chat</h1>
        <h1>Nav: {props.userId} </h1> 
        <button onClick={props.logOut}>Logout</button>
    </div>
)

export default NavComponent