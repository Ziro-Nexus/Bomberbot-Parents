import React from 'react';
import axios from 'axios';

import LoginForm from './LoginForm'
import LoginParent from '../commons/LoginParent'
import Loader from '../Altern/Loader';



import './styles/BodyPage.css'
import './styles/LoginForm.css'
import './styles/Navbar.css'


class BodyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      users: {
        username: '',
        password: ''
      },
      loading: true,
      error: null
    };
    this.data = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const obj = this.state.users;
    obj[event.target.name] = event.target.value
    this.setState(obj);
  }
  
  async handleSubmit(event) {
    event.preventDefault();
    const required = {
      "credentials": [
          {
              "name": this.state.users.username,
              "password": this.state.users.password
          }
      ]
    }
    await axios.post('http://127.0.0.1:8000/login/', JSON.stringify(required))
        .then(res => {
          if(res.data.Status === 'OK'){
            this.setState({ islogged: true, loading: false})
          }
        })
        .catch(err =>{
          this.setState({ loading:false, error: err })
          console.log("Esta fallando el post");
          /* ccreate page of error  */
        })

        /*Guardando datos en cache */
      }
  render() {

    if (this.props.value === true) {
      return <LoginParent />
    }


    if(this.state.error){
      return (
        <div>
          <h1>{this.state.error.message}</h1>
        </div>
      );
    }
    return ( 
        <div className="container-fluid style-main justify-content-center">
            <div className="row d-flex align-items-center ">
                <div className="col-12 bg-secondary shadow p-3 mb-5 bg-light rounded formulario  d-flex flex-column justify-content-center">
                <LoginForm 
                islogged={this.state.islogged}
                username = {this.state.users.username}
                password = {this.state.users.password} 
                handleChange={this.handleChange} 
                handleSubmit={this.handleSubmit}
                data={this.data}
                loading={this.state.loading}
                />
                </div>
            </div>
        </div>
    );
  }
}

export default BodyPage;