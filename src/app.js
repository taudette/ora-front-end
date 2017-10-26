import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { fetchUser } from './actions/user'
import { fetchMessages, postMessage } from './actions/chat'
import { API_MAP, defaultHeaders, testMessage } from './apiMap'

const store = configureStore();
    
const newSession = () => {
    store.dispatch(fetchUser(API_MAP.newSession, defaultHeaders ))
}

const loadMessages = () => {
    store.dispatch(fetchMessages(API_MAP.loadMessages, defaultHeaders))
}

const newMessage = () => {
    store.dispatch(postMessage(API_MAP.postMessage, defaultHeaders))
}

class App extends Component {
    render() {
        // newSession()
        // loadMessages()
        newMessage()

        return (
            <Provider store={store}>
                <div className="app">
                    <h1>Ora Chat</h1>
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
