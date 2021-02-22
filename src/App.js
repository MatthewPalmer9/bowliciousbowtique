import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './containers/Navbar';
import Home from './components/Home';
import ProductContainer from './components/ProductContainer';
import TestimonialsContainer from './components/TestimonialsContainer.js';
import Footer from './containers/Footer';
import Default from './components/Default';
import Test from './components/Test.js';


export default class App extends Component {

  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/test" component={Test} />
              <Route exact path="/testimonials" component={TestimonialsContainer}/>
              <Route exact path="/products" component={ProductContainer} />
              <Route component={Default}/>
            </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}
