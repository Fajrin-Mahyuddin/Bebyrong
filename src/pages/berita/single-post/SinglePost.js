import React, { Component } from 'react'
import CommentList from './CommentList'
import SideProfil from '../card/SideProfil'
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon} from 'react-share'
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
  
  facebookShare = id => {
    console.log('ini facebook share', id)
    
    Axios.get(`/api/share/berita`, {
      headers: {
        Accept: 'application/json',
        id,
      }
    }).then(res => {
      console.log(res.data)
    }).catch(err => alert(err))
  }
  
  render() {
    const {id = null, gambar, judul, updated_at, jmlShare} = this.state.data
    const linkShare = window.location.href;
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
                        <p className="user-name col-lg-12 col-md-12 col-6"><a href="#">{moment(updated_at).format('dddd, DD/MM/YYYY')}</a> <span className="lnr lnr-calendar-full"></span></p>
                        <p className="view col-lg-12 col-md-12 col-6"><a href="#">{jmlShare} Shared</a> <span className="lnr lnr-eye"></span></p>
                        <p className="comments col-lg-12 col-md-12 col-6"><a href="#">{this.state.totalKoment} Komentar</a> <span className="lnr lnr-bubble"></span></p>
                        <ul className="social-links col-lg-12 col-md-12 col-12">
                          <li>
                            <FacebookShareButton url={linkShare}>
                              <FacebookIcon size={25} round={true} />
                            </FacebookShareButton>
                          </li>
                          <li>
                            <TwitterShareButton url={linkShare}>
                              <TwitterIcon size={25} round={true} />
                            </TwitterShareButton>
                          </li>
                          
                        </ul>																				
                      </div>
                  
                    <div className="konten">
                      <h3 className="mt-20 mb-20">{judul}</h3>
                      <div dangerouslySetInnerHTML={{__html: this.state.data.isi}}></div>
                    </div>
                  </div>
                </div>
                {/* <NavLink /> */ }
                {id ? <CommentList getData={(e) => this.setState({totalKoment: e })} idBerita={id} />: "Loading Data.."}
              </div>
              <SideProfil />
            </div>
          </div>
        </section>
    )
  }
}
