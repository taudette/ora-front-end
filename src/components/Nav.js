import React from 'react'

const NavComponent = (props) => (
    <div>
        Nav 
        <button onClick={props.logOut}>Logout</button>
    </div>
)

export default NavComponent