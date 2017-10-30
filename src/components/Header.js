import React from 'react'

const HeaderComponent = (props) => (
    <div className="header">
        {
            props.userId && props.date &&
                <div>
                    <p className="header-user">{props.userId}</p>
                    <p className="header-date">{'\u00A0'}{props.date}</p>
                    <button onClick={props.logOut}>Log Out</button>
                </div>
        }
    </div>
)

export default HeaderComponent