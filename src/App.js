import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './containers/Navbar';
import Home from './components/Home';
import ProductContainer from './components/ProductContainer';
import TestimonialsContainer from './components/TestimonialsContainer.js';
// import Cart from './components/Cart';
import Footer from './containers/Footer';
import Default from './components/Default';
import Login from './sessions/Login';
import Signup from './sessions/Signup';
import Test from './components/Test.js';

// Testing
import Dashboard from './components/temp-study/Dashboard.jsx';
import SignUp from './components/auth/SignUp';


export default class App extends Component {

  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin = (data) => {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
            <Switch>
              <Route exact path="/signup" render={props => (
                <SignUp 
                  {...props} /* <-- we want to NOT manipulate props, but add to them */
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )} />

              <Route exact path="/dashboard" render={props => (
                <Dashboard 
                  {...props}
                  state={this.state}
                />
              )} />
              <Route exact path="/" component={Home}/>
              <Route exact path="/test" component={Test} />
              <Route exact path="/testimonials" component={TestimonialsContainer}/>
              <Route exact path="/products" component={ProductContainer} />
              <Route exact path="/login" component={Login}/>
              <Route exact path="/signup" component={Signup}/>
              <Route component={Default}/>
            </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}
