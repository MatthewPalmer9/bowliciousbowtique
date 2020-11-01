import React, { Component } from 'react';

export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            registrationErrors: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        console.log("success");
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        onChange={this.handleChange}
                        type="email"
                        name="email"
                        placeholder="example@email.com"
                        value={this.state.email}
                        required
                    />

                    <input 
                        onChange={this.handleChange}
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
