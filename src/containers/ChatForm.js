import React from 'react'
import { connect } from 'react-redux'
import ChatFormComponent from '../components/ChatForm'
import { postMessage } from '../actions/chat'

const ChatContainer = (props) => {
    setId(props.userId)
    return (
        <ChatFormComponent onSubmit={props.getValues} userId={props.userId} resetForm={props.resetForm}/>
    )
}

const mapStateToProps = ({user} = state) => {
    return {
       userId: user.userId
    }
} 

let user = ''
const setId = (userId) => {
    return user = userId
}

const mapDispatchToProps = (dispatch) => {
    return {
        getValues(values){
            dispatch(postMessage(values, user))
        },
        resetForm(){
            dispatch(reset('chatForm'))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)