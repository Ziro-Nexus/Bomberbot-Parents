import React, { Component } from "react";

import Navbar from "../components/login/Navbar";
import BodyPage from "../components/login/BodyPage";
import NavSocial from "../components/commons/NavSocial";
import LoginParent from "../components/commons/LoginParent";
import Footer from "../components/login/Footer";

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid d-flex flex-column image-main">
        <Navbar />
        <NavSocial />
        <BodyPage value />
        <Footer />
      </div>
    );
  }
}
