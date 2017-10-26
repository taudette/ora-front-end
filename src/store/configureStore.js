import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import userReducer from '../reducers/user'
import chatReducer from '../reducers/chat'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
        user: userReducer,
        chat: chatReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
