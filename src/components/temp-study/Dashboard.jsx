import React, { Component } from 'react';
import Registration from '../../components/auth/Registration.jsx';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.state.loggedInStatus}</h1>
                <h1>Dashboard</h1>
                <Registration />
            </div>
        )
    }
}
