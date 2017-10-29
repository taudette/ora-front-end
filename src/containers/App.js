import React from 'react'
import Footer from './Footer'
import Header from './Header'
import ChatForm from './ChatForm'
import Nav from './Nav'
import Comments from './Comments'

const AppContainer = () => (
    <div>
        <Nav />
        <Header />
        <Comments />
        <ChatForm />
        <Footer />
    </div>
)

export default AppContainer