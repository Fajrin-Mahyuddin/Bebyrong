import React, { Component } from 'react'
import Header from '../../includes/Header'
import Banner from '../../includes/Banner'
import HomeAbout from './HomeAbout'
import Galery from './Galery'
import BeritaTerkini from './BeritaTerkini'
import Footer from '../../includes/Footer'
import {Helmet} from 'react-helmet'

export default class Index extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Dinas Ketahanan Pangan | Kota Makassar</title>
        </Helmet>
        <Header />
        <Banner />
        <HomeAbout />
        <Galery />
        <BeritaTerkini />
        <Footer />
      </div>
    )
  }
}
