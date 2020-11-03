import React from "react";

import "./style/FooterChildren.css";
import SocialMediaFooter from "./SocialMediaFooter";

export default class FooterChildren extends React.Component {
  render() {
    return (
      <div className="row style-header style-shadow d-flex align-items-center  justify-content-center">
        <div className="col-12 mt-2">
          <strong>
            © Copyright 2020 Design by Speed Coders - Holberton School
          </strong>
        </div>
        <SocialMediaFooter />
      </div>
    );
  }
}
