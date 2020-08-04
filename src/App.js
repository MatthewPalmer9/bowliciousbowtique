import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Deals from './components/Deals.js';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Default from './components/Default';
import Login from './sessions/Login';
import Signup from './sessions/Signup';

export default class App extends PureComponent {
  render() {
    return (
      <>
        <Router>
          <Navbar />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/deals" component={Deals}/>
              <Route exact path="/products" component={ProductList}/>
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
