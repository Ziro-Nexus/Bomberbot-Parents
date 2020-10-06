import React from 'react';

import LoginForm from './LoginForm'
import LoginParent from '../commons/LoginParent'


import './styles/BodyPage.css'
import './styles/LoginForm.css'
import './styles/Navbar.css'


class BodyPage extends React.Component {
  render() {

    if (this.props.value === true) {
      return <LoginParent />
    }
    return ( 
        <div className="container-fluid style-main justify-content-center">
            <div className="row d-flex align-items-center ">
                <div className="col-12 bg-secondary shadow p-3 mb-5 bg-light rounded formulario  d-flex flex-column justify-content-center">
                <LoginForm />
                </div>
            </div>
        </div>
    );
  }
}

export default BodyPage;