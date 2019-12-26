import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from '../../includes/Header'
import Banner from './card/Banner'
import WidgetMenu from './card/WidgetMenu'
import Post from './card/Post'
import Footer from '../../includes/Footer'

export default class Index extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/berita/:id" component={Banner} />
        </Switch>
        <WidgetMenu />
        <Switch>
          <Route path="/berita/:id" component={Post} />
        </Switch>
        <Footer />
      </div>
    )
  }
}
