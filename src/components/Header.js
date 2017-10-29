import React from 'react'

const HeaderComponent = (props) => (
    <div className="header">
        <p className="header-user">{props.userId}</p>
        <p>{props.date}</p>
    </div>
)

export default HeaderComponent