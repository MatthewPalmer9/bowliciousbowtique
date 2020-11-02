import React, { Component } from 'react';
import LogInAuth from './LogInAuth';

export default class LogIn extends Component {
    constructor(props) {
        super(props);
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth = (data) => {
        this.props.handleLogin(data);
        this.props.history.push("/dashboard");
    }

    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1>Status: {this.props.loggedInStatus}</h1>
                <LogInAuth handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </div>
        )
    }
}