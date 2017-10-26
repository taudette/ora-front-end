import React from 'react'
import { connect } from 'react-redux'
import HeaderComponent from '../components/Header'
import moment from 'moment';

const HeaderContainer = (props) => (
    <HeaderComponent date={todayDate} userId={props.userId} />
)

let todayDate = moment().format('MMM D, YYYY');

const mapStateToProps = ({user} = state) => {
    return {
       userId: user.userId
    }
} 

export default connect(mapStateToProps, null)(HeaderContainer)