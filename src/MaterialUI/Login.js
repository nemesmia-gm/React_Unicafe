import React from "react";
import {TextField, Button} from '@material-ui/core'
import Alert from "@material-ui/lab/Alert";
import styled from "styled-components";

const Login = (props) => {
    //const history = useHistory()
    const message = 'Das ist ein text'
    const onSubmit = (event) => {
        event.preventDefault()
       // props.onLogin('mluukkai')
       // history.push('/')
    }

    const Button = styled.button`
      background: Bisque;
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid Chocolate;
      border-radius: 3px;
    `

    const Input = styled.input`
      margin: 0.25em;
    `
    return (
        <div>
            <div>
                {(message &&
                    <Alert severity="success">
                        {message}
                    </Alert>
                )}
            </div>
            <h2>login</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <TextField label="username" />
                </div>
                <div>
                    <TextField  label="password" type='password' />
                </div>
                <div>
                    <Button variant="contained" color="primary" type="submit">
                        login
                    </Button>
                </div>
                -----------------------------------------
                    <div>
                    <div>
                        username:
                        <Input />
                    </div>
                    <div>
                        password:
                        <Input type='password' />
                    </div>
                    <Button type="submit" primary=''>login</Button>
                </div>
            </form>
        </div>
    )
}

export default Login;
