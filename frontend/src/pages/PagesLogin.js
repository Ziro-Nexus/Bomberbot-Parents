import React, { Component } from 'react';

import Navbar from '../components/login/Navbar'
import BodyPage from '../components/login/BodyPage'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <BodyPage />
      </div>
    );
  }
}