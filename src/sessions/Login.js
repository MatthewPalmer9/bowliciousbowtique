import React, { Component } from 'react'
import './form.css';

export default class Login extends Component {

    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = event => {
        axios.post("http://localhost:3000/sessions", {
            user: {
                email: this.state.email,
                password: this.state.password
            }
        }, 
        { withCredentials: true }
        ).then(resp => {
            console.log(resp);
            if(resp.data.status === 'create') {
                this.props.handleSuccessfulAuth(resp.data);
            }
            console.log(resp);
        }).catch(error => {
            console.log("registration error", error)
        });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form className="form-signin">
                    <div className="text-center mb-4">
                        <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
                        <span className="form inline-block h-1 w-50 rounded pink mt-8 mb-6"></span>
                    </div>

                    <div className="form-label-group">
                        <input name="email" type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus></input>
                        <label for="inputEmail">Email address</label>
                    </div>

                    <div className="form-label-group">
                        <input name="password" type="password" id="inputPassword" className="form-control" placeholder="Password" required></input>
                        <label for="inputPassword">Password</label>
                    </div>

                    
                    <button className="pink-btn btn btn-lg btn-success btn-block" type="submit">Sign in</button>
                </form>
            </div>
        )
    }
}
