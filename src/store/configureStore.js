import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import userReducer from '../reducers/user'
import messagesReducer from '../reducers/messages'
import { loadState } from '../utils/localStorage'
import { reducer as formReducer } from 'redux-form'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadState()

export default () => {
  const store = createStore(
    combineReducers({
        user: userReducer,
        messages: messagesReducer,
        form: formReducer
    }),
    persistedState,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
