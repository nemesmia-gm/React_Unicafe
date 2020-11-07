import React, {useState} from "react";
import {
    BrowserRouter as Router,
    useRouteMatch,
    Switch, Route, Link
} from "react-router-dom"
import Notes from "./Notes";
import Users from "./Users";
import Home from "./Home";
import Note from "./Note";
import { Redirect } from "react-router-dom"
import Login from "./Login";
import Container from '@material-ui/core/Container'
import {AppBar, Toolbar, IconButton, Button} from '@material-ui/core'
import styled from 'styled-components'

const Page = styled.div`
    padding: 1em;
    background: papayawhip;
    `

const Navigation = styled.div`
      background: BurlyWood;
      padding: 1em;
    `

const Footer = styled.div`
      background: Chocolate;
      padding: 1em;
      margin-top: 1em;
    `

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
    ];

    const [user, setUser] = useState(null);

    const login = (user) => {
        setUser(user)
    };

    const match = useRouteMatch('/notes/:id');
    const note = match
        ? notes.find(note => note.id === Number(match.params.id))
        : null;

    const padding = {
        padding: 5
    };

    return (
        <div>
            <Container>
                <div>
                        <div>
                            <AppBar position="static">
                                <Toolbar>
                                    <Button color="inherit" component={Link} to="/">
                                        home
                                    </Button>
                                    <Button color="inherit" component={Link} to="/notes">
                                        notes
                                    </Button>
                                    <Button color="inherit" component={Link} to="/users">
                                        users
                                    </Button>
                                    {user
                                        ? <em>{user} logged in</em>
                                        : <Button color="inherit" component={Link} to="/login">
                                            login
                                        </Button>
                                    }
                                </Toolbar>
                            </AppBar>
                        </div>
                        <Switch>
                            <Route path="/notes/:id">
                                <Note note={note} />
                            </Route>
                            <Route path="/notes">
                                <Notes notes={notes} />
                            </Route>
                            <Route path="/users">
                                {user ? <Users /> : <Redirect to="/login" />}
                            </Route>
                            <Route path="/login">
                                <Login onLogin={login} />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    <div>
                        <br />
                        <em>Note app, Department of Computer Science 2020</em>
                    </div>
                </div>
            </Container>
            <div>
                <Page>
                    <Navigation>
                        <Link style={padding} to="/">home</Link>
                        <Link style={padding} to="/notes">notes</Link>
                        <Link style={padding} to="/users">users</Link>
                        {user
                            ? <em>{user} logged in</em>
                            : <Link style={padding} to="/login">login</Link>
                        }
                    </Navigation>

                    <Switch>
                        <Route path="/notes/:id">
                            <Note note={note} />
                        </Route>
                        <Route path="/notes">
                            <Notes notes={notes} />
                        </Route>
                        <Route path="/users">
                            {user ? <Users /> : <Redirect to="/login" />}
                        </Route>
                        <Route path="/login">
                            <Login onLogin={login} />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>

                    <Footer>
                        <em>Note app, Department of Computer Science 2020</em>
                    </Footer>
                </Page>
            </div>
        </div>
    )
};

export default App;
