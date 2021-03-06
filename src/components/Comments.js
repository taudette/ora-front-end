import React from 'react'

const RenderComment = ({ time, messageText, userName }) => {
    return (
        <div className="message">
            <p>
                {userName}{'\u00A0'}
                <span className="messageTime">{time}</span>
            </p>
            <p>{messageText}</p>
        </div>
    )
}

const CommentsComponent = (props) => {
    return (
        <div className="messageContainer">
            { 
            props.messages.length > 0 &&
                props.messages.map((message, index) => {
                    return <RenderComment key={index} {...message} />
                }) 
            }
        </div>
    )
}
    
export default CommentsComponent