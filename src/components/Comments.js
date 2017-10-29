import React from 'react'

const RenderComment = ({ time, messageText, userName }) => {
    return (
        <div>{time} {messageText} {userName}</div>
    )
}

const CommentsComponent = (props) => {
    return (
        <div>
        { props.messages.map((message, index) => {
            return <RenderComment key={index} {...message} />
          }) }
        </div>
    )
}
    
export default CommentsComponent