import React, { Component } from 'react';

import Header from '../components/HomeChildrens/HeaderChildren';
import BodyProgress from '../components/progressChildren/ProgressChildren';
import FooterChildren from '../components/HomeChildrens/FooterChildren';


export default class PagesPogress extends Component {
  render() {
    return (
      <div className="container-fluid d-flex flex-column image-main">
        <Header />
        <BodyProgress />
        <FooterChildren />
      </div>
    );
  }
}