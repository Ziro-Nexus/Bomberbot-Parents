import React from 'react';

import './styles/Navbar.css';

import logo from '../images/logobom2.png';
import fi from '../images/finlandia_bandera.png'
import en from '../images/reino-unido.png'
import ne from '../images/HOLANDA.png'

class Navbar extends React.Component {
  render() {
    return (
    <header>
    <div className="container-fluid ">
        <div className="row d-flex justify-content-between align-items-center">
            <div className="col-12 col-sm-4">
                <a href="/">
                    <img className="img-logo" src={logo} alt="Logo Bomberbot" />
                </a>
            </div>

            <div className="col-12 col-sm-4 d-flex images">
                <a href="/"><img className="img" src={en} alt="Idioma ingles" /></a>
                <a href="/"><img className="img" src={fi} alt="Idioma souma" /></a>
                <a href="/"><img className="img" src={ne} alt="Neherlandes" /></a>
            </div>

            <div className="col-12 col-sm-4 d-flex justify-content-end">
                <a href="/">Go at Home</a>
            </div>
        </div>
    </div>
    </header>
    );
  }
}

export default Navbar;