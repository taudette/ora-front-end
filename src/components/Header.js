import React from 'react'

const HeaderComponent = (props) => (
    <div className="header">
        <p className="header-user">{props.userId}</p>
        <p className="header-date">{'\u00A0'}{props.date}</p>
    </div>
)

export default HeaderComponent