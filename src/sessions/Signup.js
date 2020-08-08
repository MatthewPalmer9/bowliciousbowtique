import React, { Component } from 'react'

export default class Signup extends Component {
    render() {
        return (
            <div>
                <form className="form-signin">
                    <div className="text-center mb-4">
                        <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
                        <span className="form inline-block h-1 w-50 rounded pink mt-8 mb-6"></span>
                    </div>

                    <div className="form-label-group">
                        <input type="input" id="inputEmail" className="form-control" placeholder="Username" required autoFocus></input>
                        <label htmlFor="username">Username</label>
                    </div>

                    <div className="form-label-group">
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required></input>
                        <label htmlFor="inputEmail">Email address</label>
                    </div>

                    <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required></input>
                        <label htmlFor="inputPassword">Password</label>
                    </div>

                    
                    <button className="pink-btn btn btn-lg btn-success btn-block" type="submit">Create Account</button>
                </form>
            </div>
        )
    }
}
