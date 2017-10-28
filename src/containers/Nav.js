import React from 'react'
import { connect } from 'react-redux'
import NavComponent from '../components/Nav'
import { logOut } from '../utils/localStorage'

const NavContainer = () => (    
    <NavComponent logOut={logOut}/>
)

export default NavContainer