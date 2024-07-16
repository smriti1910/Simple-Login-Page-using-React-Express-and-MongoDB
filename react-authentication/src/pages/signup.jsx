import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from "axios";
import './signup.css';

function SignUp() {

    function registerNewUser(event) {
        event.preventDefault();
        const newUserData = {
            "firstName": `${document.querySelector('.first-name').value}`,
            "lastName": `${document.querySelector('.last-name').value}`,
            "phoneNumber": `${document.querySelector('.phone-no').value}`,
            "email": `${document.querySelector('.email').value}`,
            "password": `${document.querySelector('.new-password').value}`
        };

        axios.post(`http://localhost:3500/signup/`, newUserData)
            .then(response => {
                console.log(response.data);
                if (response.data.message) {
                    alert('Registration Failed');
                } else {
                    alert(response.data.message);
                }
            })
            .catch(error => {
                console.error('There was an error registering:', error);
            });
    }

    return (
        <React.Fragment>
            <div className="signup-container">
                <form onSubmit={registerNewUser} className="form-signup">
                    <h2>Sign Up</h2>
                    First Name <input type="text" className="first-name" required /> <br />
                    Last Name <input type="text" className="last-name" required /> <br />
                    Phone no <input type="number" className="phone-no" required /> <br />
                    Email<input type="email" className="email" required /> <br />
                    Enter New Password<input type="password" className="new-password" required /> <br />
                    <button type="submit" className="signup-button">Submit</button> <br />
                    <Link to={'/'} className='link-2'>Already Registered? <span className="login">Login here</span></Link>
                </form>
            </div>
        </React.Fragment>
    );
}

export default SignUp;
