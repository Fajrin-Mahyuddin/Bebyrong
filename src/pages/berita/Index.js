import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from '../../includes/Header'
import Banner from './card/Banner'
import WidgetMenu from './card/WidgetMenu'
import Post from './card/Post'
import Footer from '../../includes/Footer'
import BeritaKeg from '../berita/card/BeritaKeg'


export default class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <WidgetMenu />
        <Switch> */}
          <Route path="/berita/:id" component={Post} />
          {/* <Route path="/berita/kegiatan" component={Post} /> */}
        </Switch>
        <Footer />
      </div>
    )
  }
}
