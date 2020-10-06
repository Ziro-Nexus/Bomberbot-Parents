import React, { Component } from 'react';

import Navbar from '../components/login/Navbar'
import NavSocial from '../components/commons/NavSocial'
import Children from '../components/HomeChildrens/Children'
import FooterChildren from '../components/HomeChildrens/FooterChildren'

export default class PagesChildrens extends Component {
  render() {
    return (
      <div className="container-fluid d-flex flex-column image-main">
        <Navbar />
        {/* <NavSocial /> */}
        <Children/>
        <FooterChildren />
      </div>
    );
  }
}