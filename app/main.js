import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import Auth from 'j-toker'
import App from './components/App.jsx'
import SignIn from './components/SignIn.jsx'
import UserInfo from './components/UserInfo.jsx'

Auth.configure({
  apiUrl: 'http://localhost:3000/api/v1'
})

React.render(
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={SignIn} />
      <Route path="user" component={UserInfo} />
    </Route>
  </Router>,
  document.getElementById('content')
)
