import React, { Component } from 'react';

import Navbar from '../components/login/Navbar'
import NavSocial from '../components/commons/NavSocial'
import Children from '../components/HomeChildrens/Children'
import Footer from '../components/login/Footer'

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid d-flex flex-column image-main">
        <Navbar />
        <NavSocial />
        <Children/>
        <Footer />
      </div>
    );
  }
}