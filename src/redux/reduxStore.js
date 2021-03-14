import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import profileReducer from './profileReducer';
import dialogReducer from './dialogReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import appReducer from './appReducer';

let reducers = combineReducers({
    pageDialogs: dialogReducer,
    pageProfile: profileReducer,
    //sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;
export default store