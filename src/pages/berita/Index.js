import React, { Component } from 'react'
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
        <Banner />
        <WidgetMenu />
        <Post />
        <Footer />
      </div>
    )
  }
}
