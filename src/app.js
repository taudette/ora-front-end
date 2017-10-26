import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { fetchUser, postMessage } from './actions/user'
import { fetchMessages } from './actions/chat'
import { API_MAP, defaultHeaders } from './apiMap'

const store = configureStore();
    
const newSession = () => {
    store.dispatch(fetchUser(API_MAP.newSession, defaultHeaders ))
}

const loadMessages = () => {
    store.dispatch(fetchMessages(API_MAP.loadMessages, {'Content-Type': 'application/vnd.api+json'}))
}

const newMessage = () => {
    store.dispatch(postMessage(API_MAP.postMessage), )
}

class App extends Component {
    render() {
        newSession()
        loadMessages()
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
