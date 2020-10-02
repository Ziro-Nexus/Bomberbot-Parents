import React from 'react';

import LoginForm from './LoginForm'

import './styles/BodyPage.css';

class BodyPage extends React.Component {

  render() {
    return (
      <main>
        {/* <img src={Photo} alt='Imagen principal'/> */}
        <div className="container justify-content-center">
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