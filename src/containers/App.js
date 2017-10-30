import React from 'react'
import Header from './Header'
import ChatForm from './ChatForm'
import Comments from './Comments'

const AppContainer = () => (
    <div>
        <Header />
        <div className="chat">
            <Comments />
            <ChatForm />
        </div>
    </div>
)

export default AppContainer