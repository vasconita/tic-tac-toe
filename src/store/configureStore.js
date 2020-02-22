import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from 'reducers/rootReducer';
import reduxThunk from 'redux-thunk';

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify here name, actionsBlacklist, actionsCreators and other options
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(reduxThunk),
    // other store enhancers if any
);

export default createStore(rootReducer, enhancer);
