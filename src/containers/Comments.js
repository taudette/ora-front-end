import React from 'react'
import { connect } from 'react-redux'
import CommentsComponent from '../components/Comments'

const CommentsContainer = (props) => (
    <CommentsComponent messages={props.messages}/>
)

const mapStateToProps = ({messages}=state) => {
    return {
       messages: messages
    }
} 

export default connect(mapStateToProps, null)(CommentsContainer)