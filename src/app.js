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

// load messages when userID is stored in state
// TODO change to token
const selectToken = (state) => state.user.userId

let token

const handleToken = () => {
    token = selectToken(store.getState())
    if (token != undefined) {
        //loadMessages()
        console.log(token)
    }
}

let listen = store.subscribe(handleToken)

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
