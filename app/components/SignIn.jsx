import React from 'react';
import Auth from 'j-toker'

export default class SignIn extends React.Component { 

  state = {
      email: '',
      password: '',
      loginStatus: 'None'
  }

  constructor(props) {
    super(props);
  }

  handleInputChange = ev => {
    let changedValue = {};
    changedValue[ev.target.name] = ev.target.value;
    this.setState(changedValue);
  }

  handleSignIn = ev => {
    ev.preventDefault();
    Auth.emailSignIn({
      email:    this.state.email,
      password: this.state.password,
      config:   'default'
    }).then((resp) => {
      this.setState({
        email: '',
        password: '',
        loginStatus: 'Success!'
      })
    }).fail((resp) => {
      this.setState({
        loginStatus: `Error: ${resp.data.errors}`
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSignIn}>
          <input placeholder="Email" name="email" value={this.state.email} onChange={this.handleInputChange}/>
          <input placeholder="Password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
          <button type="submit" value="Login">Login</button>
        </form>
        <p>Status: {this.state.loginStatus}</p>
      </div>
    )
  }
}
