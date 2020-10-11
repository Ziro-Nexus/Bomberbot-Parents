import React, { Component } from 'react';

import Navbar from '../components/login/Navbar'
import Header from '../components/HomeChildrens/HeaderChildren';
import Children from '../components/HomeChildrens/Children'
import FooterChildren from '../components/HomeChildrens/FooterChildren'

export default class PagesChildrens extends Component {
  render() {
    return (
      <div className="container-fluid d-flex flex-column image-main">
        <Header />
        {/* <NavSocial /> */}
        <Children/>
        <FooterChildren />
      </div>
    );
  }
}