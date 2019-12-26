import React, { Component } from 'react'
import CommentForm from './CommentForm'
import Axios from 'axios';

export default class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataKomen: [],
      dataKomen1: [],
      isClick: false,
      lengthData: 2,
      currentPage: 1,
      idBerita: this.props.idBerita
    }
  }

  componentDidMount() {
    // let id = this.props.idBerita;
    this.setState({
        idBerita:this.props.idBerita
    })
    console.log(this.state.idBerita)
    Axios.get(`/api/berita/1/komentar?page=${this.state.currentPage}`)
    .then(respon => {
      this.setState({
        dataKomen: respon.data
      })      
      this.props.getData(respon.data.meta.total)

    }).catch(err => alert(err))
  }

  moreComment = (e) => {
    e.preventDefault();
    let obj = this.props.dataKomen
    let number = Object.keys(obj).length
    this.setState({
      lengthData: (!this.state.isClick) ? number:2 ,
      isClick:!this.state.isClick
    })
  }
  
  render() {
    // const dataKomen = this.props.dataKomen.data || [];
    const idBerita = this.props.idBerita;
    // const jumtotal = this.props.dataKomen.meta || {};
    
    
    return (
      <div className="comments-area">
        {/* <a href="#" onClick={this.moreComment} ><h4>{(this.state.isClick)?'Tutup':'Lihat'} Komentar ({jumtotal.total})</h4></a> */}
        <a href="#" onClick={this.moreComment} ><h4>See More</h4></a>
        {this.state.dataKomen1.map((komentar, i) => {
          if(i <= this.state.lengthData ) {
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
            } 
            return null
        })}
        <CommentForm idBerita={idBerita} />	                                             				
      </div>
    )
  }
}
