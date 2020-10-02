import React from 'react';

import LoginForm from './LoginForm'

import './styles/BodyPage.css';
import Photo from '../../images/bombebotimages.jpg';

class BodyPage extends React.Component {

  render() {
    return (
      
      <main>
        <div className="container justify-content-center">
          <img className="imag_main" src={Photo} alt="Photo bomberbot" />
            <div className="row d-flex align-items-center ">
                <div className="col-12 bg-secondary shadow p-3 mb-5 bg-light rounded formulario">
                 <LoginForm />
                </div>
            </div>
        </div>
        </main>
    );
  }
}

export default BodyPage;