import React from 'react';

class LoginForm extends React.Component {

  render() {
    return (
      <div>
        <form className="align-items-center">
          <div className="form-group">
            <label>Username</label>
            <input
              className="form-control"
              type="text"
              name="username"
              required="required"
            />
            
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="text"
              name="password"
              required="required"
            />
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox"/>
              I accept the terms and conditions
            </label>
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
          Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;