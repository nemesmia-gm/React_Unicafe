import React from "react";
import {TextField, Button} from '@material-ui/core'
import Alert from "@material-ui/lab/Alert";

const Login = (props) => {
    //const history = useHistory()
    const message = 'Das ist ein text'
    const onSubmit = (event) => {
        event.preventDefault()
       // props.onLogin('mluukkai')
       // history.push('/')
    }

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
            </form>
        </div>
    )
}

export default Login;
