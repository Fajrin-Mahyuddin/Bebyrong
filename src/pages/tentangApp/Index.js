import React, { Component } from 'react'
import Header from '../../includes/Header'
import Banner from '../Banner'
import Video from './cards/Video'
import Services from './cards/Services'
import Footer from '../../includes/Footer'
import {Helmet} from 'react-helmet'

export default class Index extends Component {
  state = {
    title: "Tentang Aplikasi"
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>{this.state.title}</title>
        </Helmet>
        <Header />
        <Banner judul={this.state.title} />
        <Video />
        <Services />
        <Footer />
      </div>
    )
  }
}
