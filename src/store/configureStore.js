import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import userReducer from '../reducers/user'
import chatReducer from '../reducers/chat'
import { loadState } from '../utils/localStorage'
import { reducer as formReducer } from 'redux-form'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadState()

export default () => {
  const store = createStore(
    combineReducers({
        user: userReducer,
        chat: chatReducer,
        form: formReducer
    }),
    persistedState,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
