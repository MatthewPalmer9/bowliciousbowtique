import React, { Component } from 'react';
import Registration from './Registration.jsx';

export default class SignUp extends Component {

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
                <h1>Status: {this.props.loggedInStatus}</h1>
                <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </div>
        )
    }
}
