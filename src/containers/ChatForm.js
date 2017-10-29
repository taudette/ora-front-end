import React from 'react'
import { connect } from 'react-redux'
import ChatFormComponent from '../components/ChatForm'
import { postMessage } from '../actions/chat'
import { logOut } from '../utils/localStorage'

const ChatContainer = (props) => {
    setId(props.userId)
    return (
        <ChatFormComponent onSubmit={props.getValues} userId={props.userId} logOut={logOut} resetForm={props.resetForm}/>
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
            console.log(values, user)
            dispatch(postMessage(values, user))
        },
        resetForm(){
            dispatch(reset('chatForm'))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)