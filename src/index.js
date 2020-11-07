import ReactDOM from "react-dom";
import React from "react";
// import App from "./Part2b-Countries/App";
// import App from "./Part3-Phonebook/App";

import './index.css'

import {combineReducers, createStore} from 'redux'
import noteReducer from './Redux-notes/reducers/noteReducer'
import filterReducer from "./Redux-notes/reducers/filterReducer";
import Provider from "react-redux/es/components/Provider";
import App from "./Redux-notes/App";
import {composeWithDevTools} from "redux-devtools-extension";

const reducer = combineReducers({
    notes: noteReducer,
    filter: filterReducer
});

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

export default store
