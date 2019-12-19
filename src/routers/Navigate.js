import React, { Component } from 'react'
import {BrowserRouter, Link, NavLink, Switch, Route} from 'react-router-dom'
import Beranda from '../pages/beranda/Index'
import NotFound from '../includes/404'

export default class Navigate extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Beranda} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}
