// src/routes.js
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import {
  ClassesContainer,
  Students,
  SignIn,
  SignUp
} from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ClassesContainer} />
        <Route exact path="/classes/:classId" component={Students} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </div>
    )
  }
}
