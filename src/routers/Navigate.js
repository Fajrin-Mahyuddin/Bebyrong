import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Beranda from '../pages/beranda/Index'
import Berita from '../pages/berita/Index'
import NotFound from '../includes/404'
import Content from '../pages/berita/single-post/Content'
import TentangApp from '../pages/tentangApp/Index'
import Kontak from '../pages/kontak/Index'
import ProfilPage from '../pages/profil/Index'

export default class Navigate extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Beranda} />
          <Route path="/profil/:param" component={ProfilPage} />
          {/* <Route path="/profil/:param" component={Profil} /> */}
          <Route exact path="/berita/:id" component={Berita} />
          <Route path="/berita/:id/detail/:slug"  component={Content} />
          <Route path="/tentang-aplikasi" component={TentangApp} />
          <Route path="/kontak"  component={Kontak} />
          {/* <Route path="/berita/kegiatan"  component={BeritaKeg} /> */}
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}
