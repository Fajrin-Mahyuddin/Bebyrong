import React, { Component } from 'react'
import CommentForm from './CommentForm'
import Axios from 'axios';

export default class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataKomen: [],
      metaKomen: {},
      linksKomen: {},
      isClick: false,
      currentPage: 1
    }
    this.nextPage = this.nextPage.bind(this);
  }

  componentDidMount() {
    this.getDataKomen(this.state.currentPage)
  }

  getDataKomen = (currentPage) => {
    
    let id = this.props.idBerita;
    if(currentPage) {
      Axios.get(`/api/berita/${id}/komentar?page=${currentPage}`)
      .then(respon => {
        this.setState({
          dataKomen: respon.data.data,
          metaKomen:respon.data.meta,
          currentPage:respon.data.meta.current_page,
          linksKomen: respon.data.links
        })
        
        this.props.getData(respon.data.meta.total)
        
      }).catch(err => alert(err))
    }
  }
  
  nextPage = () => {
    let nextPage = this.state.currentPage + 1
    this.getDataKomen(nextPage)
  }

  prevPage = () => {
    let prevPage = this.state.currentPage - 1
    this.getDataKomen(prevPage)
  }
  
  render() {
    const dataKomen = this.state.dataKomen
    const metaKomen = this.state.metaKomen || 0
    const linksKomen = this.state.linksKomen
    
    return (
      <div className="comments-area">
        <h4 className="comment-navigate">
          {(!linksKomen.prev) ? <span></span>: <div onClick={this.prevPage} ><span className="lnr lnr-chevron-left"></span></div>} 
              Komentar ({metaKomen.total})
          {(!linksKomen.next) ? <span></span>: <div onClick={this.nextPage}><span className="lnr lnr-chevron-right"></span></div>} 
        </h4>
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
        <CommentForm idBerita={this.props.idBerita} />
      </div>
    )
  }
}
