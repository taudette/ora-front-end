import React from 'react'
import { connect } from 'react-redux'
import ChatFormComponent from '../components/ChatForm'
import { postMessage } from '../actions/chat'

const ChatContainer = (props) => (
    <ChatFormComponent onSubmit={props.getValues}/>
)

const mapStateToProps = ({user} = state) => {
    return {
       userId: user.userId
    }
} 

// const getValues = (values) => {
//     console.log(values)
// }

const mapDispatchToProps = (dispatch) => ({
    getValues(values){
        dispatch(postMessage(values))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)