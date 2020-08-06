import React, { Component } from 'react'
import './form.css';

export default class Login extends Component {
    render() {
        return (
            <div>
                <form className="form-signin">
                    <div className="text-center mb-4">
                        <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
                        <span className="form inline-block h-1 w-50 rounded pink mt-8 mb-6"></span>
                    </div>

                    <div className="form-label-group">
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus></input>
                        <label for="inputEmail">Email address</label>
                    </div>

                    <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required></input>
                        <label for="inputPassword">Password</label>
                    </div>

                    
                    <button className="pink-btn btn btn-lg btn-success btn-block" type="submit">Sign in</button>
                </form>
            </div>
        )
    }
}
