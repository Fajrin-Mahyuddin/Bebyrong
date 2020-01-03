import React, { Component } from 'react'
import Banner from '../../Banner'
import {Route, Switch, Redirect} from 'react-router-dom'
import SinglePost from './SinglePost'
import Header from '../../../includes/Header'
import Footer from '../../../includes/Footer'
import {Helmet} from 'react-helmet'
import SeacrhPage from '../search/Index'

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
        judul: judul || 'Hasil Pencarian'
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
      <Switch>
         <Route path="/berita/seacrh/:params" render={() => <SeacrhPage /> } /> 
         <Route path="/berita/:id/detail/:slug" render={() => <SinglePost getData={this.getDataChild} slug={this.props.match.params.slug} /> } /> 
      </Switch>
      <Footer />
      </div>
    )
  }
}
