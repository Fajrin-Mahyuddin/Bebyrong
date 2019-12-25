import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Banner from './Banner'
import SinglePost from './SinglePost'
import Navigate from './NavLink'
import CommentList from './CommentList'
import SideProfil from '../card/SideProfil'
import Header from '../../../includes/Header'
import Footer from '../../../includes/Footer'
import Axios from 'axios'

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      commentLists : [],
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
      <Header />
      <Banner dataJudul={this.state.data.judul} />
      {/* <Switch>
        <Route path="/berita/:id/detail/:idBerita" render={(props) => <SinglePost dataLoop={this.state.data} {...props} />} />
      </Switch> */}
      <SinglePost dataLoop={this.state.data} id_comment={this.state.id} />
      <Footer />
      </div>
    )
  }
}
