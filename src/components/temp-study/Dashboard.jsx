import React, { Component } from 'react';
import Registration from '../../components/auth/Registration.jsx';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1>{this.props.state.loggedInStatus}</h1>
                <h1>Dashboard</h1>
                <Registration />
            </div>
        )
    }
}
