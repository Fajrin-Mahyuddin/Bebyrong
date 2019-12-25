import React, { Component } from 'react'
import {BrowserRouter, Link, NavLink, Switch, Route} from 'react-router-dom'
import Beranda from '../pages/beranda/Index'
import Berita from '../pages/berita/Index'
import BeritaKeg from '../pages/berita/card/BeritaKeg'
import NotFound from '../includes/404'
import Test from '../test/Test'
import Content from '../pages/berita/single-post/Content'

export default class Navigate extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Beranda} />
          <Route path="/test"  component={Test} />
          <Route exact path="/berita/:id"  component={Berita} />
          <Route path="/berita/:id/detail/:idBerita"  component={Content} />
          {/* <Route path="/berita/kegiatan"  component={BeritaKeg} /> */}
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}
