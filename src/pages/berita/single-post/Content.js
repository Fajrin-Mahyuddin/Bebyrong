import React, { Component } from 'react'
import Banner from '../../Banner'
import SinglePost from './SinglePost'
import Header from '../../../includes/Header'
import Footer from '../../../includes/Footer'
import Axios from 'axios'
import {Helmet} from 'react-helmet'

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      judul: null,
    }
    this.getDataChild = this.getDataChild.bind(this);
  }
 
  getDataChild = judul => {
      this.setState({
        judul: judul
      })
  }

  render() {
    return (
      <div>
      <Helmet>
        <title>{this.state.judul}</title>
      </Helmet>
      <Header />
      <Banner judul={this.state.judul} />
      <SinglePost getData={this.getDataChild} slug={this.props.match.params.slug} />
      <Footer />
      </div>
    )
  }
}
