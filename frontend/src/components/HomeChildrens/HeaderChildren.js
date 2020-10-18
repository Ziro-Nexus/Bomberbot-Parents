import React from 'react';
import { Link} from 'react-router-dom';


import Photo from '../../images/logo_01_BB_tr.png';
import Kingdow from '../../images/reino-unido.png'
import Filand from '../../images/finlandia.png'
import Netherlands from '../../images/paises-bajos.png'


import './style/HeaderChildren.css';

export default class HeaderChildren extends React.Component {

    render(){
        return (
            <div>
               <div className="row d-flex style-header  align-items-center bg-light">

                        <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
                            <a href="https://bomberbot.com/">
                                <img className="img-logo" src={Photo} alt="Logo Bomberbot" />
                            </a>
                        </div>

                        <div className="col-12 col-sm-4 d-flex justify-content-center">
                            <a href="/">
                                <img className="image-pais" src={Kingdow} alt="Reino Unido" />
                            </a>
                            <a href="/">
                                <img className="image-pais" src={Netherlands} alt="Países bajos" />
                            </a>
                            <a href="/">
                                <img className="image-pais" src={Filand} alt="Suomi" />
                            </a>
                        </div>

                        <div className="col-12 col-sm-4 navbar d-flex justify-content-center align-items-center">
                            
                            <nav>
                                <a href="/index">HOME</a>
                                {this.props.pages ? <Link to='/homeParents'>OTHER CHILD</Link> : <a href="/">INFORMATION</a>}
                                <a href="/logout">LOGOUT</a>
                            </nav>

                        </div>
                        </div>
            </div>
        )
    }
}