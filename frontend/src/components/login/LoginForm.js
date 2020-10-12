import React from 'react';
import { Link, Redirect } from 'react-router-dom';


import './styles/LoginForm.css'

class LoginForm extends React.Component {


  render() {

 if(this.props.islogged === true){
      return <Redirect to={{
        pathname: '/homeParents',
      }} />;

    }
    return (
      <div>
      <form className="align-items-center" onSubmit={this.props.handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            className="form-control"
            type="text"
            name="username"
            value={this.props.username}
            onChange={this.props.handleChange}
            required="required"
          />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                    else.</small>

        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={this.props.password}
            onChange={this.props.handleChange}
            required="required"
          />
        </div>
        <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label">Check me out</label>
            </div>
          <button className="btn btn-primary">
          Submit
          </button>
      </form>
    </div>
    );
  }
}

export default LoginForm;