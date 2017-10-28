import React from 'react'

const NavComponent = (props) => (
    <div>
        <h1>Nav: {props.userId} </h1> 
        <button onClick={props.logOut}>Logout</button>
    </div>
)

export default NavComponent