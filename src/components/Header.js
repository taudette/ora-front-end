import React from 'react'

const HeaderComponent = (props) => (
    <div>
        <h1>{props.userId}</h1>
        <p>{props.date}</p>
    </div>
)

export default HeaderComponent