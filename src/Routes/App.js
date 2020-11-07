import React from "react";
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from "react-router-dom"
import Notes from "./Notes";
import Users from "./Users";
import Home from "./Home";
import Note from "./Note";

const App = () => {
    const notes = [
        {
            content: 'the app state is in redux store',
            important: true,
            id: 1
        },
        {
            content: 'state changes are made with actions',
            important: false,
            id: 2
        },
        {
            content: 'test',
            important: false,
            id: 3
        }
    ]
    const padding = {
        padding: 5
    };

    return (
        <Router>
            <div>
                <Link style={padding} to="/">home</Link>
                <Link style={padding} to="/notes">notes</Link>
                <Link style={padding} to="/users">users</Link>
            </div>

            <Switch>
                <Route path="/notes/:id">
                    <Note notes={notes} />
                </Route>
                <Route path="/notes">
                    <Notes notes={notes}/>
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>

            <div>
                <i>Note app, Department of Computer Science 2020</i>
            </div>
        </Router>
    )
};

export default App;
