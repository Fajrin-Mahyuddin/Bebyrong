import React, { Component } from 'react'
import CommentForm from './CommentForm'
import Axios from 'axios';

export default class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataKomen: [],
      metaKoment: [],
      isClick: false,
      currentPage: 1,
    }

  }

  componentDidMount() {
    this.getDataKomen()
    
  }

  getDataKomen = () => {
    let id = this.props.idBerita;
    Axios.get(`/api/berita/${id}/komentar?page=${this.state.currentPage}`)
    .then(respon => {
      this.setState({
        dataKomen: respon.data,
        metaKoment:respon.data.meta
      })
      
      this.props.getData(respon.data.meta.total)

    }).catch(err => alert(err))
  }
  
  
  render() {
    console.log(this.state.dataKomen);
    const dataKomen = this.state.dataKomen.data || []
    const metaKomen = this.state.metaKoment || 0
    return (
      <div className="comments-area">
      <h4 className="comment-navigate"><a href="#" ><span class="lnr lnr-chevron-left"></span></a> Komentar ({metaKomen.total})<a href="#"><span class="lnr lnr-chevron-right"></span></a></h4>
        <hr />
        {dataKomen.map((komentar, i) => {
        return (
            <div className="comment-list" key={i}>
              <div className="single-comment justify-content-between d-flex">
                  <div className="user justify-content-between d-flex">
                      <div className="thumb">
                          <img src={komentar.gambar || "/img/blog/c1.jpg"} alt=""/>
                      </div>
                      <div className="desc">
                          <h5><a href="#">{komentar.nama}</a></h5>
                          <p className="date">{komentar.waktu} </p>
                          <p className="comment">
                              {komentar.isi}
                          </p>
                      </div>
                  </div>
              </div>
            </div>)	
        })}
        {/* <CommentForm idBerita={idBerita} />	                                             				 */}
      </div>
    )
  }
}
