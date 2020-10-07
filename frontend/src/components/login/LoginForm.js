import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './styles/LoginForm.css'

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    
        username: '',
        password: ''
     
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount () {
    

  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
/*     const obj = this.state;
    obj[event.target.name] = event.target.value */
    this.setState ({
      [name]: value
    });
 /*    this.setState({
      username: event.target.value,
      password: event.target.value
    }); */
  }

  handleSubmit(event) {
    alert(this.state.username)
    alert(this.state.password)

/*     alert('A name was submitted: ' + this.state.users);
    event.preventDefault(); */
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit} className="align-items-center">
            <div className="form-group ">
                <label>Username</label>
                <input type="text" onChange={(e)=> this.handleChange(e)} className="form-control" id="exampleInputEmail1"
                    aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                    else.</small>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" value={this.state.username} onChange={this.handleChange} className="form-control" id="exampleInputPassword1" />
            </div>
            
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label">Check me out</label>
            </div>
      
            <button type="submit" className="btn btn-primary">Submit</button>
           
        </form>
      </div>
    );
  }
}

export default LoginForm;