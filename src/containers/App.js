import React from 'react'
import Footer from './Footer'
import Header from './Header'
import ChatForm from './ChatForm'
import Nav from './Nav'
import Comments from './Comments'

const AppContainer = () => (
    <div>
        <Header />
        <div className="chat">
            <Comments />
            <ChatForm />
            <Footer />
        </div>
    </div>
)

export default AppContainer