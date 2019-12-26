import React, { Component } from 'react'
import Header from '../../includes/Header'
import Footer from '../../includes/Footer'
import Banner from '../Banner'
import Info from './cards/Info'
import {Helmet} from 'react-helmet'

export default class Index extends Component {
  state = {
    judul : 'Kontak'
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>{this.state.judul}</title>
        </Helmet>
        <Header />
        <Banner judul={this.state.judul} />
        <Info />
        <Footer />
      </div>
    )
  }
}
