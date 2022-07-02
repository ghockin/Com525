/* Copyright 2022, Gabriel Hockin, All rights reserved. */

import React, { useState } from 'react';
import './LoginForm.css';
import '../images/cover.png'

function LoginForm({ Login, error }) {

    const [details, setDetails] = useState({ name: "", email: "", password: "" });

    const sumbitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <form onSubmit={sumbitHandler}>
            <div className='form-inner'>
                <h2>LOGIN</h2>
                <div className='profile'>
                    
                </div>

                {(error !== "") ? (<div className='error'>{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="name" id="name">Name</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                </div>
                <input type="submit" value="LOGIN"></input>
            </div>
        </form>
    )
}

export default LoginForm;