import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { fetchUser } from './actions/user'
import { fetchMessages, postMessage } from './actions/chat'
import { API_MAP, sessionHeaders, chatHeaders, testMessage } from './apiMap'
import AppContainer from './containers/App'

const store = configureStore();
    
const newSession = () => {
    store.dispatch(fetchUser(API_MAP.newSession, sessionHeaders ))
}

const loadMessages = () => {
    store.dispatch(fetchMessages(API_MAP.loadMessages, chatHeaders))
}

const newMessage = () => {
    store.dispatch(postMessage(API_MAP.postMessage, chatHeaders))
}

// load messages when token is stored in state & re-load in token change
// TODO change to token
const select = (state) => {
    return state.user.userId
}

let currentValue

const handleChange = () => {
    let previousValue = currentValue
    currentValue = select(store.getState())
    if (previousValue !== currentValue) {
        // loadMessages()
        console.log(currentValue)
    }
}

let unsubscribe = store.subscribe(handleChange)

class App extends Component {
    render() {
        newSession()
        return (
            <Provider store={store}>
                <div className="app">
                    <AppContainer />
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
