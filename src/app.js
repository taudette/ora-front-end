import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { fetchData } from './actions'

const store = configureStore();
console.log('test')
    
const loadData = () => {
    store.dispatch(fetchData('https://private-e46dd-orachallenge.apiary-mock.com/api/v1/messages?page1=1&page1=1'))
}

class App extends Component {
    render() {
        loadData()
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
