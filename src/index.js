import ReactDOM from "react-dom";
import React from "react";
// import App from "./Part2b-Countries/App";
// import App from "./Part3-Phonebook/App";

import './index.css'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from "./Redux-notes/App";
import noteReducer from './Redux-notes/noteReducer'

const store = createStore(noteReducer);

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root')
);

