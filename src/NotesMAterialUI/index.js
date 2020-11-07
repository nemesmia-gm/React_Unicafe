import React from "react";
import * as ReactDOM from "react-dom";
import App from "./NotesMAterialUI/App";
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
)
