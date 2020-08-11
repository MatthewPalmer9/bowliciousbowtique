import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './containers/Navbar';
import Test from './components/Test';
import Home from './components/Home';
import ProductContainer from './components/ProductContainer';
import Deals from './components/Deals.js';
// import Cart from './components/Cart';
import Footer from './containers/Footer';
import Default from './components/Default';
import Login from './sessions/Login';
import Signup from './sessions/Signup';


export default class App extends Component {

  render() {
    return (
      <>
        <Router>
          <Navbar />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/deals" component={Deals}/>
              <Route exact path="/test" component={Test} />
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
