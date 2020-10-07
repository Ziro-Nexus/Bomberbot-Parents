import React from 'react';
import { Link } from 'react-router-dom';


import './styles/LoginForm.css'

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
/*     alert('A name was submitted: ' + this.state.users);
    event.preventDefault(); */

  }


  render() {

    return (
      <div>
        <form className="align-items-center">
            <div className="form-group ">
                <label>Username</label>
                <input type="text" className="form-control" id="exampleInputEmail1"
                    aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                    else.</small>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label">Check me out</label>
            </div>
            <Link to='/homeParents'>
            <button type="submit" className="btn btn-primary">Submit</button>
            </Link>
        </form>
      </div>
    );
  }
}

export default LoginForm;