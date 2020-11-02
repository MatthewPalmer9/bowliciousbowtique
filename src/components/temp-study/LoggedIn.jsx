import React, { Component } from 'react';

export default class LoggedIn extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Am I logged in?</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
                
            </div>
        )
    }
}
