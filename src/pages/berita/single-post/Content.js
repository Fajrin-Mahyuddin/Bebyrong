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
      data: {},
      id: this.props.match.params.idBerita
    }
  }
 
  componentDidMount() {
    
    Axios.get(`/api/berita/${this.state.id}`)
    .then(respon => {
      this.setState({
        data: respon.data.data
      })
    }).catch(err => alert(err))
  }

  render() {
    
    return (
      <div>
      <Helmet>
        <title>{this.state.data.judul}</title>
      </Helmet>
      <Header />
      <Banner judul={this.state.data.judul} />
      <SinglePost dataLoop={this.state.data} id_comment={this.state.id} />
      <Footer />
      </div>
    )
  }
}
