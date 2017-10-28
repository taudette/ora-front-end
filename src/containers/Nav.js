import React from 'react'
import { connect } from 'react-redux'
import NavComponent from '../components/Nav'
import { logOut } from '../utils/localStorage'

const NavContainer = (props) => (    
    <NavComponent userId={props.userId} logOut={logOut}/>
)

const mapStateToProps = ({user} = state) => {
    return {
       userId: user.userId
    }
} 

export default connect(mapStateToProps, null)(NavContainer)