import React, { Component } from 'react'
import NavLink from './NavLink'
import CommentList from './CommentList'
import SideProfil from './SideProfil'
import moment from 'moment';

export default class SinglePost extends Component {
  render() {
    const {gambar, judul, waktu, isi} = this.props.dataLoop;
    
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
            <div className="col-lg-3  col-md-3 meta-details">
              <div className="user-details row">
                <p className="user-name col-lg-12 col-md-12 col-6"><a href="#">Admin</a> <span className="lnr lnr-user"></span></p>
                <p className="date col-lg-12 col-md-12 col-6"><a href="#">{moment(waktu).format('dddd, DD/mm/YYYY')}</a> <span className="lnr lnr-calendar-full"></span></p>
                <p className="view col-lg-12 col-md-12 col-6"><a href="#">10 Dilihat</a> <span className="lnr lnr-eye"></span></p>
                <p className="comments col-lg-12 col-md-12 col-6"><a href="#">05 Komentar</a> <span className="lnr lnr-bubble"></span></p>
                <ul className="social-links col-lg-12 col-md-12 col-6">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                </ul>																				
              </div>
            </div>

            <div className="col-lg-9 col-md-9">
              <h3 className="mt-20 mb-20">{judul}</h3>
                {isi}
            </div>
           ......

          </div>
          <NavLink />
          <CommentList />
        </div>
        <SideProfil />
      </div>
    </div>
  </section>
    )
  }
}
