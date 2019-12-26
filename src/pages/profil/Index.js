import React, { Component } from 'react'
import Header from '../../includes/Header'
import Banner from '../Banner'
import {Switch, Route} from 'react-router-dom'
import Profil from './profil-cards/Profil'
import Footer from '../../includes/Footer'
import Struktur from './struktur-cards/Struktur'
import Tugas from './tugas-cards/Tugas'
import VisiMisi from './visi-cards/VisiMisi'

export default class Index extends Component {
  render() {
    
    return (
      <div>
        <Header />
        <Banner judul={this.props.match.params.param} />
        <Switch>
          <Route path="/profil/profil-organisasi" component={Profil} />
          <Route path="/profil/tugas-pokok" component={Tugas} />
          <Route path="/profil/visi-misi" component={VisiMisi} />
          <Route path="/profil/struktur-organisasi" component={Struktur} />
        </Switch>
        <Footer />
      </div>
    )
  }
}
