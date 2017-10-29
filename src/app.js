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
import { loadState, saveState } from './utils/localStorage'

const store = configureStore();

store.subscribe(() => {
    saveState(store.getState())
})

const newSession = () => {
    if(store.getState().user.userId === undefined){
        store.dispatch(fetchUser(API_MAP.newSession, sessionHeaders))
    } 
}

const loadMessages = () => {
    store.dispatch(fetchMessages(API_MAP.loadMessages, chatHeaders))
}

const newMessage = () => {
    store.dispatch(postMessage(API_MAP.postMessage, chatHeaders))
}

// load messages when token is stored in state & re-load on token change
// currently using userId b/c cannot grab token from header
let currentValue = store.getState().user.userId
const handleTokenChange = () => {
    console.log(store.getState().user)
    let previousValue = currentValue
    currentValue = store.getState().user.userId
    console.log(previousValue, currentValue)
    if (previousValue !== currentValue) {
        loadMessages()
    }
}

store.subscribe(handleTokenChange)

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
