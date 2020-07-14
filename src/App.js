import React, { PureComponent } from 'react';
import './App.css';
import image from './under-construction.png'

export default class App extends PureComponent {
  render() {
    return (
      <div className="container">
        <img className="construction" src={image}></img>
        <div className="head">Bowlicious Bowtique</div>
        <hr></hr>
        <div className="subhead">Under Construction</div>
      </div>
    )
  }
}
