import React, { Component } from 'react'
import Header from '../../../includes/Header'
import Banner from '../../Banner'
import Content from './Content'
import Footer from '../../../includes/Footer';
import Helmet from 'react-helmet';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      judul: 'Search',
    }
   
  }

  render() {
    return (
      <div>
      <Helmet>
        <title>{this.state.judul}</title>
      </Helmet>
      <Header />
      <Banner judul={this.state.judul} />
      <Content />
      <Footer />
      </div>
    )
  }
}
