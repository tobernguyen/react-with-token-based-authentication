import React from 'react'
import Navigation from './Navigation.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Authentication with Rails backed-end</h1>
        <Navigation />
        {this.props.children}
      </div>
    )
  }
}