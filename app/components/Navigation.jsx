import React from 'react'
import { Link } from 'react-router'

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>Sign In</Link></li>
          <li><Link to='/user'>User Info</Link></li>
        </ul>
      </div>
    )
  }
}