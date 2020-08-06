import React, { Component } from 'react';


export default class Navbar extends Component {

    handleClick = e => {
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <a className="brand-text navbar-brand" href="/">Bowlicious Bowtique</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/products">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/deals" tabIndex="-1" aria-disabled="true">Deals</a>
                            </li>
                        </ul>
                        <ul>
                            <form className="form-inline my-2 my-lg-0">
                                <a href="/login" onClick={this.handleClick}className="btn btn-outline-success my-2 my-sm-0" type="submit">Log in</a>
                                <a href="/signup" onClick={this.handleClick} className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Sign Up</a>
                            </form>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}