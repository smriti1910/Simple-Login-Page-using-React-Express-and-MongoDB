import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './signup';
import axios from 'axios';
import './login.css'

function Login() {

    function authLogin(event) {
        event.preventDefault();

        const emailValue = document.querySelector('.email-input').value;
        const passwordValue = document.querySelector('.password-input').value;

        console.log(emailValue)
        console.log(passwordValue)

        axios.get(`http://localhost:3500/login/${emailValue}/${passwordValue}`)
        .then(response => {
            console.log(response.data);
            if (response.status === 200) {
                alert(response.data.message);
            } else {
                alert(`Unexpected status code: ${response.status}`);
            }
        })
        .catch(error => {
            if (error.response) {
                alert(`${error.response.data.message}`);
            } else if (error.request) {
                console.error('Error: No response received from server', error.request);
                alert('Error: No response received from server');
            } else {
                console.error('Error:', error.message);
                alert(`Error: ${error.message}`);
            }
        });
    }

    return (
        <React.Fragment>
            <div className="login-container">
                <form onSubmit={authLogin} className="form-login">
                    <h2>Login</h2>
                    Email<input type="email" className="email-input" /> <br />
                    Password<input type="password" className="password-input" /> <br />
                    <button type="submit" className="login-button">Submit</button> <br />
                    <Link to={'/signup'} className='link-1'>New User? <span className="signup">Sign Up here</span></Link>
                </form>
            </div>
        </React.Fragment>
    )
}

export default Login;
