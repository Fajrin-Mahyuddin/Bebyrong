import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from '../../includes/Header'
import Banner from './card/Banner'
import BannerSingle from './single-post/Banner'
import WidgetMenu from './card/WidgetMenu'
import Post from './card/Post'
import Footer from '../../includes/Footer'
import BeritaKeg from '../berita/card/BeritaKeg'
import SinglePost from './single-post/SinglePost'


export default class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <Banner /> */}
        <Switch>
          {/* <Route exact path="/berita/read/:id" component={BannerSingle} /> */}
          <Route path="/berita/:id" component={Banner} />
          {/* <Route exact path="/berita/:id" component={WidgetMenu} /> */}
          {/* <Route path="/berita/kegiatan" component={Post} /> */}
        </Switch>
        <WidgetMenu />
        {/* <Post /> */}
        {/* <Switch>
          <Route path="/berita/:id" component={WidgetMenu} />
        </Switch> */}
        <Switch>
          {/* <Route path="/berita/read/:id" component={SinglePost} /> */}
          <Route path="/berita/:id" component={Post} />
        </Switch>
        <Footer />
      </div>
    )
  }
}
