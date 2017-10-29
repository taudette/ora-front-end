import React from 'react'
import { connect } from 'react-redux'
import CommentsComponent from '../components/Comments'

const CommentsContainer = (props) => (
    <CommentsComponent props={props}/>
)

const mapStateToProps = (state) => {
    console.log(state)
    return {
       
    }
} 

export default connect(mapStateToProps, null)(CommentsContainer)