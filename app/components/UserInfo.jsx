import React from 'react'
import Auth from 'j-toker'

export default class UserInfo extends React.Component {
  static defaultProps = {
    user: Auth.user
  }

  render() {
    return (
      <div>Login status: {JSON.stringify(this.props.user)}</div>
    )
  }
}