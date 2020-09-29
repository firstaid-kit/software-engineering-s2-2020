import React, { useState } from 'react';
//import axios from 'axios';

function Login(props) {
    const [state, setState] = useState({
        username: "",
        password: "",
        successMessage: null
    })

    const handleChange = (e) => {
        const{id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        console.log("Submit clicked!");
    }

    const redirectToRegister = () => {
        props.history.push('/user');
    }

    return(
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <br></br>
                    <label>Username</label>
                    <input type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter username"
                        value={state.username}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        value={state.password}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <input type="submit"
                        value="Login"
                        className="btn btn-primary" 
                    />
                </div>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="registerMessage">
                <span>Dont have an account? </span>
                <span className="loginText" onClick={() => redirectToRegister()}><u><b>Register</b></u></span> 
            </div>
        </div>
    )
}

export default Login;