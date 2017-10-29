import React from 'react'
import { connect } from 'react-redux'
import HeaderComponent from '../components/Header'
import moment from 'moment';
import { logOut } from '../utils/localStorage'

const HeaderContainer = (props) => (
    <HeaderComponent date={todayDate} userId={props.userId} logOut={logOut} />
)

let todayDate = moment().format('MMM D, YYYY');

const mapStateToProps = ({user} = state) => {
    return {
       userId: user.userId
    }
} 

export default connect(mapStateToProps, null)(HeaderContainer)