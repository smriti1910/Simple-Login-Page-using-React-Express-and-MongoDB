import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Form} from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/signup';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
          <div className='header'>
          </div>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
          </Routes>
        </Router>
    </React.Fragment>
  )
}

export default App
