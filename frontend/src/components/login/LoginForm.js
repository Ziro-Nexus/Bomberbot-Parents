import React from 'react';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: {
        username: '',
        password: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const obj = this.state.users;
    obj[event.target.name] = event.target.value
    this.setState(obj);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.users);
    event.preventDefault();
  }
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
              value={this.state.users.username}
              onChange={this.handleChange}
              required="required"
            />
            
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="text"
              name="password"
              value={this.state.users.password}
              onChange={this.handleChange}
              required="required"
            />
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox"/>
              I accept the terms and conditions
            </label>
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