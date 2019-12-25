import React, { Component } from 'react'
import NavLink from './NavLink'
import CommentList from './CommentList'
import SideProfil from './SideProfil'
import moment from 'moment';
import Axios from 'axios';

export default class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.dataLoop,
      dataKomen: []
    }
  }

  componentDidMount() {
    let id = this.props.id_comment;
    Axios.get(`/api/berita/${id}/komentar`)
    .then(respon => {
      this.setState({
        dataKomen: respon.data.data
      })
    }).catch(err => alert(err))
    
  }

  textString = () => {
    return {__html: this.props.dataLoop.isi}
  }

  render() {
    const {gambar, judul, waktu, jmlShare} = this.props.dataLoop
    
    return (
      
      <section className="post-content-area single-post-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 posts-list">
          <div className="single-post row">
            <div className="col-lg-12">
              <div className="feature-img">
                <img className="img-fluid" src={gambar} alt="" />
              </div>									
            </div>
            <div className="col-lg-12  col-md-12 wrapper-contex">
             
                <div className="user-details">
                  <p className="user-name col-lg-12 col-md-12 col-6"><a href="#">Admin</a> <span className="lnr lnr-user"></span></p>
                  <p className="user-name col-lg-12 col-md-12 col-6"><a href="#">{moment(waktu).format('dddd, DD/mm/YYYY')}</a> <span className="lnr lnr-calendar-full"></span></p>
                  <p className="view col-lg-12 col-md-12 col-6"><a href="#">{jmlShare} Shared</a> <span className="lnr lnr-eye"></span></p>
                  <p className="comments col-lg-12 col-md-12 col-6"><a href="#">{Object.keys(this.state.dataKomen).length} Komentar</a> <span className="lnr lnr-bubble"></span></p>
                  <ul className="social-links col-lg-12 col-md-12 col-12">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  </ul>																				
                </div>
            {/* </div>

            <div className="col-lg-9 col-md-9 context-details"> */}
              <div className="konten">
                <h3 className="mt-20 mb-20">{judul}</h3>
                <div dangerouslySetInnerHTML={this.textString()}></div>
              </div>
            </div>
          </div>

          <NavLink />
          <CommentList  dataKomen={this.state.dataKomen} />
            
        </div>
        <SideProfil />
      </div>
    </div>
  </section>
    )
  }
}
