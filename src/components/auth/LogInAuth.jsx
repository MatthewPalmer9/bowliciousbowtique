import React, { Component } from 'react';
import axios from 'axios';

export default class LogInAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            loginErrors: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        axios.post("http://localhost:3000/sessions", {
            user: {
                email: this.state.email,
                password: this.state.password
            }
        }, 
        { withCredentials: true }
        ).then(resp => {
            if(resp.data.logged_in) {
                this.props.handleSuccessfulAuth(resp.data);
            }
        }).catch(error => {
            console.log("registration error", error)
        });
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
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}
