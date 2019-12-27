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
      data: {},
      dataKomen: [],
      totalKoment: 0
    }
  }

  componentDidMount() {
    Axios.get(`/api/berita/${this.props.slug}/show`)
    .then(respon => {
      this.setState({
        data: respon.data.data
      })
      this.props.getData(respon.data.data.judul)

    }).catch(err => alert(err))
  }
  
  render() {
    const {id = null, gambar, judul, waktu, jmlShare} = this.state.data
    
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
                        <p className="comments col-lg-12 col-md-12 col-6"><a href="#">{this.state.totalKoment} Komentar</a> <span className="lnr lnr-bubble"></span></p>
                        <ul className="social-links col-lg-12 col-md-12 col-12">
                          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        </ul>																				
                      </div>
                  
                    <div className="konten">
                      <h3 className="mt-20 mb-20">{judul}</h3>
                      <div dangerouslySetInnerHTML={{__html: this.state.data.isi}}></div>
                    </div>
                  </div>
                </div>
                {/* <NavLink /> */}
                {(id) ? <CommentList getData={(e) => this.setState({totalKoment: e })} idBerita={id} />: "Loading Data.."}
              </div>
              <SideProfil />
            </div>
          </div>
        </section>
    )
  }
}
