import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero from './components/Hero';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Hero/>
        <Navbar/>
      </div>
    )
  }
}
