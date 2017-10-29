import React from 'react'
import { connect } from 'react-redux'
import ChatFormComponent from '../components/ChatForm'
import { postMessage } from '../actions/chat'

const ChatContainer = (props) => (
    <ChatFormComponent onSubmit={props.getValues} resetForm={props.resetForm}/>
)

const mapStateToProps = ({user} = state) => {
    return {
       userId: user.userId
    }
} 

const mapDispatchToProps = (dispatch) => ({
    getValues(values){
        dispatch(postMessage(values))
    },
    resetForm(){
        dispatch(reset('chatForm'))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)