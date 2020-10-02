import React, { Component } from 'react';

import Navbar from '../components/Navbar'
import BodyPage from '../components/BodyPage'

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