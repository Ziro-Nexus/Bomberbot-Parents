import React from 'react';

import './styles/Navbar.css';

import Photo from '../../images/logo_01_BB_tr.png';
import Kingdow from '../../images/reino-unido.png'
import Filand from '../../images/finlandia.png'
import Netherlands from '../../images/paises-bajos.png'
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
        
            <div className="row d-flex style-header justify-content-between align-items-center bg-light">

                <div className="col-12 col-sm-4 d-flex align-items-center justify-content-center">
                    <Link to="/index">
                        <img className="img-logo" src={Photo} alt="Logo Bomberbot" />
                    </Link>
                </div>

                <div className="col-12 col-sm-4 d-flex justify-content-center">
                    <a href="/">
                        <img className="image-pais" src={Kingdow} alt="Reino Unido"/>
                    </a>
                    <a href="/">
                        <img className="image-pais" src={Netherlands} alt="Países bajos" />
                    </a>
                    <a href="/">
                        <img className="image-pais" src={Filand} alt="Suomi" />
                    </a>
                </div>

                <div className="col-12 col-sm-4 d-flex justify-content-end">
                    <a href="https://bomberbot.com/">
                    <div className="home-bb d-flex align-items-center justify-content-center">
                        Go at Home
                    </div>
                    </a>
                </div>
             
                {/*                 <div class="spaces">
            
                </div> */}
        </div>
    
    );
  }
}

export default Navbar;